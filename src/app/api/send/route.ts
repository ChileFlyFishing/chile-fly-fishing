import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/contact-schema';
import { escapeHtml } from '@/lib/escape-html';
import { isRateLimited } from '@/lib/rate-limit';

const MIN_SUBMIT_MS = 3000;

function getClientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests, please try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid submission', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, country, message, website, formRenderedAt } = parsed.data;

    // Honeypot filled or submitted too fast to be human — silently pretend success
    // so scripted abuse doesn't learn it was detected.
    const isBot = (!!website && website !== '') || Date.now() - formRenderedAt < MIN_SUBMIT_MS;
    if (isBot) {
      return NextResponse.json({ success: true });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Chile Fly Fishing <dispatch@chileflyfishingexpeditions.com>',
      to: [
        'mat.araneda@gmail.com',
        'matias@chileflyfishing.cl',
        'matias@chileflyfishingexpeditions.cl'
      ],
      subject: `Nueva Consulta - Formulario de Contacto ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #171717;">
          <img src="https://chileflyfishingexpeditions.com/assets/images/logo-chileflyfishing.svg" alt="Logo" style="width: 150px; margin-bottom: 20px;" />

          <h2 style="font-weight: bold; font-size: 18px; color: #006DC6; margin-bottom: 10px;">Nuevo lead</h2>
          <p style="margin: 5px 0;"><strong>CLIENT:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 5px 0;"><strong>EMAIL:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 5px 0;"><strong>PHONE:</strong> ${escapeHtml(phone)}</p>
          <p style="margin: 5px 0;"><strong>COUNTRY:</strong> ${escapeHtml(country)}</p>

          <h2 style="font-weight: bold; font-size: 16px; margin-top: 25px; margin-bottom: 10px;">MESSAGE/NOTES</h2>
          <p style="margin: 5px 0; color: #404040;">${escapeHtml(message)}</p>

          <h2 style="font-weight: bold; font-size: 16px; margin-top: 25px; margin-bottom: 10px;">AGREEMENT</h2>
          <p style="margin: 5px 0;"><strong>Terms accepted:</strong> Yes</p>
        </div>
      `,
    });

    // Inscribe al lead en el motor de journeys de RockyAI (secuencia de
    // bienvenida automatizada). Best-effort: si falla, no debe romper la
    // confirmacion que ve el visitante - el aviso por Resend de arriba ya
    // le llego a Matias de todos modos.
    if (process.env.ROCKYAI_WEBHOOK_SECRET) {
      try {
        await fetch('https://4r9t26otrd.execute-api.us-east-2.amazonaws.com/contact-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Secret': process.env.ROCKYAI_WEBHOOK_SECRET,
          },
          body: JSON.stringify({ name, email, country, phone, message }),
        });
      } catch (rockyaiError) {
        console.error('RockyAI enrollment error (non-blocking):', rockyaiError);
      }
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: 'Failed to send manifest' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, dates, experience, message, agree } = body;

    // Formato profesional del Manifiesto
    const emailContent = `
      EXPEDITION MANIFEST - NEW LEAD
      ---------------------------------
      CLIENT: ${name}
      EMAIL: ${email}
      PHONE: ${phone}
      
      PREFERENCES
      ---------------------------------
      WINDOW: ${dates}
      PROFICIENCY: ${experience}
      
      MESSAGE/NOTES
      ---------------------------------
      ${message}
      
      AGREEMENT
      ---------------------------------
      Terms accepted: ${agree ? 'Yes' : 'No'}
    `;

    const data = await resend.emails.send({
      from: 'Dispatch <dispatch@chileflyfishingexpeditions.com>',
      to: ['mat.araneda@gmail.com'], // Usa solo tu Gmail personal para empezar sin riesgos
      subject: `[NEW MANIFEST] ${name} - ${dates}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error); // Esto te dirá el error exacto en los logs de Vercel
    return NextResponse.json({ error: 'Failed to send manifest' }, { status: 500 });
  }
}
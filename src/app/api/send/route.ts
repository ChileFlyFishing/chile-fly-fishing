import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, dates, experience, message, agree } = body;

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
          <img src="https://www.chileflyfishingexpeditions.com/assets/images/logo-chileflyfishing.svg" alt="Logo" style="width: 150px; margin-bottom: 20px;" />
          
          <h2 style="font-weight: bold; font-size: 18px; color: #006DC6; margin-bottom: 10px;">EXPEDITION MANIFEST - NEW LEAD</h2>
          <p style="margin: 5px 0;"><strong>CLIENT:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>EMAIL:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>PHONE:</strong> ${phone}</p>
          <p style="margin: 5px 0;"><strong>COUNTRY:</strong> ${country}</p>
          
          <h2 style="font-weight: bold; font-size: 16px; margin-top: 25px; margin-bottom: 10px;">MESSAGE/NOTES</h2>
          <p style="margin: 5px 0; color: #404040;">${message}</p>
          
          <h2 style="font-weight: bold; font-size: 16px; margin-top: 25px; margin-bottom: 10px;">AGREEMENT</h2>
          <p style="margin: 5px 0;"><strong>Terms accepted:</strong> ${agree ? 'Yes' : 'No'}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: 'Failed to send manifest' }, { status: 500 });
  }
}
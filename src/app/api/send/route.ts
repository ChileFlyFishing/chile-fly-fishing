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
      from: 'Dispatch <dispatch@chileflyfishingexpeditions.com/>', // Nota: Reemplaza con tu dominio verificado cuando puedas
      to: 'matias@chileflyfishingexpeditions.com', // <--- PON AQUÍ TU CORREO DONDE RECIBIRÁS LOS LEADS
      subject: `[NEW MANIFEST] ${name} - ${dates}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send manifest' }, { status: 500 });
  }
}
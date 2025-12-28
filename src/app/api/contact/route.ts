import { NextResponse } from 'next/server';

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim() || '';
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM = process.env.CONTACT_FROM_EMAIL || 'no-reply@example.com';
    const TO = process.env.CONTACT_TO_EMAIL || 'hello@example.com';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY missing');
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const html = `
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      <hr />
      <p>Enviado desde: ${escapeHtml(process.env.NEXT_PUBLIC_SITE_URL || 'sitio')}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject: `${subject ? `${subject} - ` : ''}Nuevo mensaje desde el sitio`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Resend error', res.status, text);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

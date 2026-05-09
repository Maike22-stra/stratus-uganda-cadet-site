import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const body = await req.json();
  const record = { ...body, created_at: new Date().toISOString(), status: 'new' };

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase.from('cadet_applications').insert(record);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  // Optional WhatsApp Cloud API notification. Add META_WHATSAPP_TOKEN, META_PHONE_NUMBER_ID and ADMIN_WHATSAPP_TO in Vercel env vars.
  if (process.env.META_WHATSAPP_TOKEN && process.env.META_PHONE_NUMBER_ID && process.env.ADMIN_WHATSAPP_TO) {
    await fetch(`https://graph.facebook.com/v19.0/${process.env.META_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.META_WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.ADMIN_WHATSAPP_TO,
        type: 'text',
        text: { body: `New Stratus Cadet Application\nName: ${body.fullName}\nPhone: ${body.phone}\nEmail: ${body.email}\nCitizenship: ${body.citizenship}` }
      })
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}

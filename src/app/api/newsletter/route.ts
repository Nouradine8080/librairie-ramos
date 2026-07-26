import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get('email') || '').trim();
  if (!email || !email.includes('@')) {
    return NextResponse.redirect(new URL('/?newsletter=error', req.url), { status: 303 });
  }
  const supabase = createSupabaseServer();
  await supabase.from('newsletter_subscribers').insert({ email }).select().maybeSingle();
  // On ignore les doublons (unique constraint) - c'est OK.
  return NextResponse.redirect(new URL('/?newsletter=success', req.url), { status: 303 });
}

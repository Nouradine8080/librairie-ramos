'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr('');
    const supabase = createSupabaseBrowser();
    const { error } = await supabase.auth.signInWithPassword({ email, password: pwd });
    if (error) { setErr(error.message); setBusy(false); return; }
    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12 md:py-20">
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 md:p-8">
        <div className="w-14 h-14 rounded-2xl bg-[#111] flex items-center justify-center mx-auto mb-4">
          <Lock size={22} className="text-[#FFCC00]" />
        </div>
        <h1 className="text-xl font-bold text-[#111] text-center mb-1">Espace administrateur</h1>
        <p className="text-sm text-[#6B6B6B] text-center mb-6">Connexion sécurisée via Supabase</p>
        <form onSubmit={onSubmit} className="space-y-3">
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"
            className="w-full px-4 py-3 border border-[#E8E8E8] rounded-full bg-white text-sm focus:outline-none focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20" />
          <input type="password" required value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Mot de passe"
            className="w-full px-4 py-3 border border-[#E8E8E8] rounded-full bg-white text-sm focus:outline-none focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20" />
          {err && <p className="text-xs text-[#DC2626]">⚠️ {err}</p>}
          <button type="submit" disabled={busy}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFCC00] text-[#111] font-semibold text-sm hover:bg-[#E6B800] disabled:opacity-70">
            <Lock size={14} /> {busy ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}

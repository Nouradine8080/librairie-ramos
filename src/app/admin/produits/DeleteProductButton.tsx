'use client';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

export default function DeleteProductButton({ id }: { id: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!confirm('Supprimer définitivement ce produit ?')) return;
    setBusy(true);
    const supabase = createSupabaseBrowser();
    const { error } = await supabase.from('products').delete().eq('id', id);
    setBusy(false);
    if (error) { alert('Erreur : ' + error.message); return; }
    router.refresh();
  }

  return (
    <button onClick={onDelete} disabled={busy} className="p-1.5 rounded-lg hover:bg-[#FF6B6B]/10" aria-label="Supprimer">
      <Trash2 size={14} className="text-[#DC2626]" />
    </button>
  );
}

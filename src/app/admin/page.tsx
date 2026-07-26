import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Package, Sparkles, Star, ArrowRight } from 'lucide-react';
import { createSupabaseServer } from '@/lib/supabase-server';

export default async function AdminHome() {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const { count: total } = await supabase.from('products').select('*', { count: 'exact', head: true });
  const { count: featured } = await supabase.from('products').select('*', { count: 'exact', head: true }).eq('featured', true);
  const { count: bestsellers } = await supabase.from('products').select('*', { count: 'exact', head: true }).eq('bestseller', true);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#111]">Tableau de bord</h1>
        <p className="text-sm text-[#6B6B6B] mt-1">Bienvenue, {user.email}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4CC] flex items-center justify-center"><Package size={18} className="text-[#8A6D00]" /></div>
            <span className="text-3xl font-extrabold text-[#111]">{total || 0}</span>
          </div>
          <p className="text-xs text-[#6B6B6B] font-medium">Produits totaux</p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4CC] flex items-center justify-center"><Sparkles size={18} className="text-[#8A6D00]" /></div>
            <span className="text-3xl font-extrabold text-[#111]">{featured || 0}</span>
          </div>
          <p className="text-xs text-[#6B6B6B] font-medium">En vedette</p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4CC] flex items-center justify-center"><Star size={18} className="text-[#8A6D00]" /></div>
            <span className="text-3xl font-extrabold text-[#111]">{bestsellers || 0}</span>
          </div>
          <p className="text-xs text-[#6B6B6B] font-medium">Meilleures ventes</p>
        </div>
      </div>
      <Link href="/admin/produits" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FFCC00] text-[#111] font-semibold text-sm hover:bg-[#E6B800]">
        <Package size={14} /> Gérer les produits <ArrowRight size={14} />
      </Link>
    </main>
  );
}

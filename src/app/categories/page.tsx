import Link from 'next/link';
import { Tag, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { createSupabaseServer } from '@/lib/supabase-server';
import { CATEGORIES_FALLBACK } from '@/lib/site-config';

export const revalidate = 300;
export const metadata = { title: 'Toutes les catégories' };

export default async function CategoriesPage() {
  const supabase = createSupabaseServer();
  const { data: cats } = await supabase.from('categories').select('*').order('sort_order');
  const { data: prods } = await supabase.from('products').select('category').eq('status', 'active');
  const list = (cats && cats.length ? cats : CATEGORIES_FALLBACK) as any[];
  const counts: Record<string, number> = {};
  (prods || []).forEach((p: any) => { counts[p.category] = (counts[p.category] || 0) + 1; });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4CC] text-[#8A6D00] text-[11px] font-semibold mb-3">
            <Tag size={11} /> TOUTES LES CATÉGORIES
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111] tracking-tight">Parcourez par catégorie</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {list.map(c => (
            <Link key={c.slug} href={`/boutique?category=${encodeURIComponent(c.name)}`}
              className="group bg-white rounded-2xl border border-[#E8E8E8] p-6 hover:border-[#FFCC00] hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF4CC] flex items-center justify-center text-3xl mb-4 group-hover:bg-[#FFCC00]">{c.icon}</div>
              <h2 className="text-lg font-bold text-[#111] mb-2">{c.name}</h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">{c.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8A6D00]">{counts[c.name] || 0} produit{(counts[c.name] || 0) > 1 ? 's' : ''}</span>
                <ChevronRight size={16} className="text-[#6B6B6B] group-hover:text-[#111]" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

import { Suspense } from 'react';
import { Store, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { createSupabaseServer } from '@/lib/supabase-server';
import type { Product } from '@/lib/types';

export const revalidate = 60;
export const metadata = { title: 'Boutique — E-books, formations & guides numériques' };

interface Props { searchParams: { q?: string; category?: string; filter?: string; sort?: string } }

export default async function ShopPage({ searchParams }: Props) {
  const supabase = createSupabaseServer();
  let query = supabase.from('products').select('*').eq('status', 'active');
  if (searchParams.category) query = query.eq('category', searchParams.category);
  if (searchParams.filter === 'bestsellers') query = query.eq('bestseller', true);

  const sort = searchParams.sort || 'newest';
  if (sort === 'price-asc')  query = query.order('price_amount', { ascending: true });
  else if (sort === 'price-desc') query = query.order('price_amount', { ascending: false });
  else if (sort === 'popular') query = query.order('bestseller', { ascending: false });
  else query = query.order('published_at', { ascending: false });

  const { data } = await query;
  let products = (data || []) as Product[];

  if (searchParams.q) {
    const q = searchParams.q.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.short_description || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q)
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4CC] text-[#8A6D00] text-[11px] font-semibold mb-3">
            <Store size={11} /> BOUTIQUE COMPLÈTE
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111] tracking-tight">Tous nos produits numériques</h1>
          <p className="text-sm text-[#6B6B6B] mt-2">{products.length} produit{products.length > 1 ? 's' : ''} disponible{products.length > 1 ? 's' : ''} — paiement sécurisé via Chariow.</p>
        </div>

        <form className="bg-white rounded-2xl border border-[#E8E8E8] p-4 md:p-5 mb-6 flex flex-col md:flex-row gap-3 md:items-center">
          <input name="q" defaultValue={searchParams.q || ''} placeholder="Rechercher un produit…"
            className="flex-1 px-4 py-2.5 border border-[#E8E8E8] rounded-full bg-white text-sm text-[#111] focus:outline-none focus:border-[#FFCC00]" />
          <select name="category" defaultValue={searchParams.category || ''}
            className="px-4 py-2.5 border border-[#E8E8E8] rounded-full bg-white text-sm text-[#111] focus:outline-none focus:border-[#FFCC00]">
            <option value="">Toutes les catégories</option>
            <option>E-books</option>
            <option>Formations</option>
            <option>Guides pratiques</option>
            <option>Éducation</option>
            <option>Développement personnel</option>
            <option>Contenus en haoussa</option>
          </select>
          <select name="sort" defaultValue={sort}
            className="px-4 py-2.5 border border-[#E8E8E8] rounded-full bg-white text-sm text-[#111] focus:outline-none focus:border-[#FFCC00]">
            <option value="newest">Nouveautés</option>
            <option value="popular">Popularité</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
          <button type="submit" className="px-5 py-2.5 rounded-full bg-[#FFCC00] text-[#111] text-sm font-semibold hover:bg-[#E6B800]">Filtrer</button>
        </form>

        {products.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E8E8E8] p-12 text-center">
            <Package size={40} className="mx-auto mb-3 text-[#D0D0D0]" />
            <p className="text-sm text-[#6B6B6B]">Aucun produit ne correspond à vos filtres.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

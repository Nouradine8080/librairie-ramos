import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Edit3, Trash2, Sparkles, Star } from 'lucide-react';
import { createSupabaseServer } from '@/lib/supabase-server';
import DeleteProductButton from './DeleteProductButton';
import type { Product } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
  const products = (data || []) as Product[];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#111]">Produits</h1>
          <p className="text-sm text-[#6B6B6B] mt-1">{products.length} produit{products.length > 1 ? 's' : ''} au total</p>
        </div>
        <Link href="/admin/produits/nouveau" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FFCC00] text-[#111] font-semibold text-sm hover:bg-[#E6B800]">
          <Plus size={14} /> Ajouter un produit
        </Link>
      </div>
    </main>
  );
}

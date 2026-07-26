import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Sparkles, Eye } from 'lucide-react';
import type { Product } from '@/lib/types';
import ChariowWidget from './ChariowWidget';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#FFCC00]/60 transition-all duration-200 flex flex-col">
      <div className="relative aspect-[4/5] bg-[#F0F0F0] overflow-hidden">
        {product.image ? (
          <Image src={product.image} alt={product.name} fill sizes="(max-width:768px)50vw,25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#D0D0D0]"><BookOpen size={48} /></div>
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#111] text-[#FFCC00] border border-[#111]">📥 Produit digital</span>
          {product.bestseller && <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#FFCC00] text-[#111] border border-[#FFCC00]">⭐ Meilleure vente</span>}
          {product.badge && !product.bestseller && <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#EAFBEA] text-[#166534] border border-[#4ADE80]/30">{product.badge}</span>}
        </div>
        {product.featured && (
          <div className="absolute top-3 right-3">
            <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
              <Sparkles size={14} className="text-[#FFCC00]" />
            </span>
          </div>
        )}
      </div>
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-medium text-[#6B6B6B] uppercase tracking-wide">{product.category}</span>
          <span className="text-[10px] text-[#D0D0D0]">•</span>
          <span className="text-[10px] font-medium text-[#6B6B6B]">{product.language}</span>
        </div>
        <h3 className="text-[15px] font-bold text-[#111] leading-tight mb-2 line-clamp-2 min-h-[38px]">{product.name}</h3>
        <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2 mb-3">{product.short_description}</p>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[#111]">{product.price}</span>
        </div>
        <div className="mt-3">
          <ChariowWidget productId={product.chariow_product_id} storeDomain={product.chariow_store_domain} size="sm" />
        </div>
        <Link href={`/produit/${product.slug}`} className="mt-3 w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#111] bg-white border border-[#111] rounded-full hover:bg-[#111] hover:text-[#FFCC00] transition-all">
          <Eye size={14} /> Voir le produit
        </Link>
      </div>
    </article>
  );
}

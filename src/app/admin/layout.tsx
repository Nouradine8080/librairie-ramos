import Link from 'next/link';
import { Package, Home, LogOut, Settings } from 'lucide-react';

export const metadata = { title: 'Administration — Librairie Ramos' };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <header className="bg-white border-b border-[#E8E8E8] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center"><Settings size={14} className="text-[#FFCC00]" /></div>
            <span className="text-sm font-bold text-[#111]">Admin • Librairie Ramos</span>
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/admin/produits" className="text-xs font-semibold text-[#333] hover:text-[#111] px-3 py-1.5 rounded-full hover:bg-[#F7F7F7] flex items-center gap-1"><Package size={12} />Produits</Link>
            <Link href="/" className="text-xs font-semibold text-[#333] hover:text-[#111] px-3 py-1.5 rounded-full hover:bg-[#F7F7F7] flex items-center gap-1"><Home size={12} />Site public</Link>
            <form action="/api/logout" method="POST">
              <button type="submit" className="text-xs font-semibold text-[#DC2626] hover:text-[#B91C1C] px-3 py-1.5 rounded-full hover:bg-[#FF6B6B]/10 flex items-center gap-1"><LogOut size={12} />Déconnexion</button>
            </form>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}

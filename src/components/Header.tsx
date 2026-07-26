'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Search, Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');
  const pathname = usePathname();

  const nav = [
    { href: '/', label: 'Accueil' },
    { href: '/boutique', label: 'Boutique' },
    { href: '/categories', label: 'Catégories' },
    { href: '/boutique?filter=bestsellers', label: 'Meilleures ventes' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center group-hover:bg-[#FFCC00] transition-colors">
              <BookOpen size={18} className="text-[#FFCC00] group-hover:text-[#111] transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-[15px] md:text-base font-bold text-[#111] tracking-tight leading-none">LIBRAIRIE RAMOS</div>
              <div className="text-[9px] md:text-[10px] text-[#6B6B6B] mt-0.5 hidden sm:block">Votre bibliothèque numérique</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n => {
              const active = pathname === n.href || (n.href !== '/' && pathname?.startsWith(n.href.split('?')[0]));
              return (
                <Link key={n.href} href={n.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all ${
                    active ? 'bg-[#FFCC00] text-[#111]' : 'text-[#333] hover:bg-[#F7F7F7]'
                  }`}>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F7F7]"
              aria-label="Rechercher">
              <Search size={18} className="text-[#111]" />
            </button>
            <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1FB955] shadow-sm hover:shadow-md transition-all"
              aria-label="WhatsApp">
              <MessageCircle size={15} /> <span className="hidden md:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F7F7]"
              aria-label="Menu">
              {mobileOpen ? <X size={20} className="text-[#111]" /> : <Menu size={20} className="text-[#111]" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-fadeIn">
            <form action="/boutique" method="get" className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
              <input
                name="q" autoFocus value={q} onChange={e => setQ(e.target.value)}
                placeholder="Rechercher un e-book, une formation, un guide…"
                className="w-full pl-11 pr-4 py-3 border border-[#E8E8E8] rounded-full bg-white text-sm text-[#111] placeholder:text-[#9B9B9B] focus:outline-none focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20"
              />
            </form>
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E8E8E8] bg-white animate-fadeIn">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map(n => (
              <Link key={n.href} href={n.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#333] hover:bg-[#F7F7F7]">
                {n.label}
              </Link>
            ))}
            <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold bg-[#25D366] text-white mt-2">
              <MessageCircle size={16} /> Contactez-nous sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

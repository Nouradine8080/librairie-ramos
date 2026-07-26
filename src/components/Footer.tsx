import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Youtube, Music2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Footer() {
  const s = SITE_CONFIG.socialLinks;
  return (
    <footer className="bg-[#111] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <BookOpen size={18} className="text-[#111]" />
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">LIBRAIRIE RAMOS</div>
                <div className="text-[10px] text-white/60 mt-0.5">Depuis 2026</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">« {SITE_CONFIG.slogan} »</p>
            <p className="text-xs text-white/50 mt-4">E-books, formations et guides pratiques pour l'Afrique francophone et les lecteurs de contenu haoussa.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFCC00] mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/70 hover:text-[#FFCC00]">Accueil</Link></li>
              <li><Link href="/boutique" className="text-sm text-white/70 hover:text-[#FFCC00]">Boutique</Link></li>
              <li><Link href="/categories" className="text-sm text-white/70 hover:text-[#FFCC00]">Catégories</Link></li>
              <li><Link href="/a-propos" className="text-sm text-white/70 hover:text-[#FFCC00]">À propos</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-[#FFCC00]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFCC00] mb-4">Catégories populaires</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>E-books en français</li>
              <li>E-books en haoussa</li>
              <li>Guides pratiques</li>
              <li>Formations numériques</li>
              <li>Ressources éducatives</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFCC00] mb-4">Suivez-nous</h3>
            <div className="flex flex-wrap gap-2">
              <a href={s.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFCC00] hover:text-[#111] flex items-center justify-center transition-colors"><Music2 size={16} /></a>
              <a href={s.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFCC00] hover:text-[#111] flex items-center justify-center transition-colors"><Facebook size={16} /></a>
              <a href={s.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFCC00] hover:text-[#111] flex items-center justify-center transition-colors"><Instagram size={16} /></a>
              <a href={s.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFCC00] hover:text-[#111] flex items-center justify-center transition-colors"><Youtube size={16} /></a>
              <a href={s.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"><MessageCircle size={16} /></a>
            </div>
            <p className="text-xs text-white/50 mt-6 leading-relaxed">
              Boutique officielle Chariow :<br />
              <a href={`https://${SITE_CONFIG.chariowStore}`} target="_blank" rel="noopener noreferrer" className="text-[#FFCC00] hover:underline break-all">{SITE_CONFIG.chariowStore}</a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© 2026 Librairie Ramos — Tous droits réservés.</p>
          <p className="text-xs text-white/50">Paiements sécurisés via Chariow</p>
        </div>
      </div>
    </footer>
  );
}

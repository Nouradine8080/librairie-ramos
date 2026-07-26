import { MessageCircle, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tight mb-3">Contactez-nous</h1>
        <p className="text-sm text-[#6B6B6B] mb-8">Nous sommes à votre écoute pour toute question sur nos produits.</p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-[#E8E8E8] p-6 hover:border-[#25D366] group">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-3 group-hover:bg-[#25D366]">
              <MessageCircle size={20} className="text-[#25D366] group-hover:text-white" />
            </div>
            <h2 className="text-base font-bold text-[#111] mb-1">WhatsApp</h2>
            <p className="text-xs text-[#6B6B6B]">La façon la plus rapide de nous joindre. Réponse sous 24h.</p>
          </a>
          <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4CC] flex items-center justify-center mb-3">
              <ShoppingBag size={20} className="text-[#8A6D00]" />
            </div>
            <h2 className="text-base font-bold text-[#111] mb-1">Support achat</h2>
            <p className="text-xs text-[#6B6B6B]">Question sur votre commande ? Gérée directement par Chariow.</p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

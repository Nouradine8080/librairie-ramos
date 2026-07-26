import { BookOpen, Globe, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = { title: 'À propos de Librairie Ramos' };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tight mb-4">Librairie Ramos</h1>
          <p className="text-lg text-[#333] italic">« Votre bibliothèque numérique, accessible partout. »</p>
        </div>
        <div className="space-y-6 text-[#333] leading-relaxed">
          <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#111] mb-3 flex items-center gap-2"><BookOpen size={18} className="text-[#FFCC00]" /> Notre mission</h2>
            <p className="text-sm">Librairie Ramos est une librairie numérique dédiée à la diffusion de ressources éducatives et culturelles pour l'Afrique francophone. Nous proposons une sélection soignée d'e-books, formations, guides pratiques et documents éducatifs, en <strong>français</strong> et en <strong>haoussa</strong>.</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#111] mb-3 flex items-center gap-2"><Globe size={18} className="text-[#FFCC00]" /> Notre engagement</h2>
            <p className="text-sm">Nous croyons en un accès démocratisé à la connaissance. Chaque produit est disponible immédiatement après votre achat, accessible sur tous vos appareils.</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#111] mb-3 flex items-center gap-2"><Shield size={18} className="text-[#FFCC00]" /> Paiement & livraison</h2>
            <p className="text-sm">Tous les paiements et la livraison numérique sont gérés par <strong>Chariow</strong>. Aucune donnée bancaire n'est stockée sur notre site.</p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

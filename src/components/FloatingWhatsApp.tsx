'use client';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE_CONFIG.socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}

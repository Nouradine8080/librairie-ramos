'use client';
import { useEffect, useRef } from 'react';

interface Props {
  productId: string;
  storeDomain?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ChariowWidget({ productId, storeDomain, size = 'sm', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const domain = storeDomain || 'librairie-ramos.mychariow.com';

  useEffect(() => {
    const t = setTimeout(() => {
      const w = (window as any).Chariow;
      if (w && typeof w.init === 'function') {
        try { w.init(); } catch (e) {}
      }
    }, 200);
    return () => clearTimeout(t);
  }, [productId, domain]);

  if (!productId) {
    return (
      <div className={`text-[11px] px-3 py-2 rounded-lg bg-[#FFF4CC] text-[#8A6D00] border border-[#FFCC00]/40 ${className}`}>
        ⚠️ ID Chariow manquant
      </div>
    );
  }

  const ctaWidth = size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'xs';

  return (
    <div
      ref={ref}
      className={`chariow-widget-wrapper ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<div id="chariow-widget"
          data-product-id="${productId}"
          data-store-domain="${domain}"
          data-style="tap"
          data-border-style="rounded"
          data-cta-width="${ctaWidth}"
          data-background-color="#FFFFFF"
          data-cta-animation="shine"
          data-locale="fr"
          data-primary-color="#ffcc00"></div>`
      }}
    />
  );
}

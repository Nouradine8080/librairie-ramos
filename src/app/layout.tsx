import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'e-books', 'livres numériques', 'librairie numérique',
    'e-books en français', 'e-books en haoussa', 'formations en ligne',
    'guides pratiques Afrique', 'ressources éducatives numériques',
    'Librairie Ramos', 'Chariow', 'Afrique francophone',
  ],
  authors: [{ name: 'Librairie Ramos' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport = {
  themeColor: '#FFCC00',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://js.chariowcdn.com" />
        <link rel="stylesheet" href="https://js.chariowcdn.com/v1/widget.min.css" />
      </head>
      <body>
        {children}
        {/* Chariow widget SDK */}
        <Script src="https://js.chariowcdn.com/v1/widget.min.js" strategy="afterInteractive" />
        {/* Google Analytics — optionnel */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

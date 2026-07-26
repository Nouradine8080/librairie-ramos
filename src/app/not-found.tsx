import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-extrabold text-[#111] mb-3">404</h1>
        <p className="text-lg text-[#6B6B6B] mb-8">La page que vous cherchez n'existe pas.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFCC00] text-[#111] font-semibold hover:bg-[#E6B800]">
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}

import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import ProductForm from '../ProductForm';

export default async function NewProductPage() {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  const empty = {
    id: '', name: '', slug: '', short_description: '', full_description: '',
    price: '', category: 'E-books', language: 'Français', image: '',
    chariow_product_id: '', chariow_store_domain: 'librairie-ramos.mychariow.com',
    featured: false, bestseller: false, status: 'active' as const,
    badge: '', what_you_will_learn: '', target_audience: '', content_details: '', faq: '',
    meta_title: '', meta_description: '', published_at: new Date().toISOString().slice(0, 10),
  };
  return <ProductForm initial={empty} isNew={true} />;
}

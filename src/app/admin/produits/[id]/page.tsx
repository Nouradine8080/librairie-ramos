import { redirect, notFound } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import ProductForm from '../ProductForm';

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  const { data } = await supabase.from('products').select('*').eq('id', params.id).maybeSingle();
  if (!data) notFound();
  return <ProductForm initial={data} isNew={false} />;
}

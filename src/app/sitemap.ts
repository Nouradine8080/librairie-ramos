import type { MetadataRoute } from 'next';
import { createSupabaseServer } from '@/lib/supabase-server';
import { SITE_CONFIG } from '@/lib/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createSupabaseServer();
  const { data } = await supabase.from('products').select('slug, updated_at').eq('status', 'active');
  const base = SITE_CONFIG.url;
  const staticPages = ['', '/boutique', '/categories', '/a-propos', '/contact'].map(p => ({
    url: `${base}${p}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.7,
  }));
  const productPages = (data || []).map((p: any) => ({
    url: `${base}/produit/${p.slug}`, lastModified: new Date(p.updated_at), changeFrequency: 'weekly' as const, priority: 0.8,
  }));
  return [...staticPages, ...productPages];
}

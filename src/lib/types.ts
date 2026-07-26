export interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  full_description?: string;
  price: string;
  price_amount?: number;
  currency?: string;
  category: string;
  language: string;
  image?: string;
  chariow_product_id: string;
  chariow_store_domain?: string;
  featured?: boolean;
  bestseller?: boolean;
  status?: 'active' | 'draft' | 'archived';
  badge?: string;
  what_you_will_learn?: string;
  target_audience?: string;
  content_details?: string;
  faq?: string;
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  icon: string;
  description: string;
  sort_order: number;
}

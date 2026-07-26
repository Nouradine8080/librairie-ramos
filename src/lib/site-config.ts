export const SITE_CONFIG = {
  name: 'Librairie Ramos',
  slogan: 'Votre bibliothèque numérique, accessible partout.',
  description: 'Librairie digitale spécialisée dans la vente de produits numériques : e-books, formations, guides pratiques et ressources éducatives en français et haoussa.',
  url: 'https://librairie-ramos.com',
  chariowStore: 'librairie-ramos.mychariow.com',
  primaryColor: '#FFCC00',
  socialLinks: {
    tiktok: 'https://tiktok.com/@librairieramos',
    facebook: 'https://facebook.com/librairieramos',
    instagram: 'https://instagram.com/librairieramos',
    youtube: 'https://youtube.com/@librairieramos',
    whatsapp: 'https://wa.me/22700000000',
  },
  advantages: [
    { icon: '📱', title: 'Accessible partout', description: 'Consultez vos ressources numériques depuis votre smartphone, tablette ou ordinateur.' },
    { icon: '⚡', title: 'Accès rapide', description: 'Recevez votre produit numérique après votre achat selon le système de livraison de Chariow.' },
    { icon: '📚', title: 'Contenus de qualité', description: 'Découvrez une sélection de ressources numériques utiles et pratiques.' },
    { icon: '🔒', title: 'Paiement sécurisé', description: 'Les achats sont traités via la plateforme Chariow.' },
  ],
  howItWorks: [
    { step: 1, icon: '🔍', title: 'Choisissez votre produit', description: 'Explorez notre catalogue et choisissez le produit numérique qui vous intéresse.' },
    { step: 2, icon: '🛒', title: 'Achetez votre produit', description: "Cliquez sur le bouton d'achat intégré à la page du produit." },
    { step: 3, icon: '📥', title: 'Recevez votre produit', description: 'Après votre achat, accédez à votre produit numérique via le système de livraison de Chariow.' },
  ],
};

export const CATEGORIES_FALLBACK = [
  { slug: 'ebooks', name: 'E-books', icon: '📚', description: 'Livres numériques' },
  { slug: 'education', name: 'Éducation', icon: '🎓', description: 'Ressources éducatives' },
  { slug: 'developpement-personnel', name: 'Développement personnel', icon: '💡', description: 'Épanouissement personnel' },
  { slug: 'guides-pratiques', name: 'Guides pratiques', icon: '📖', description: 'Guides concrets' },
  { slug: 'contenus-haoussa', name: 'Contenus en haoussa', icon: '🌍', description: 'Contenu en Hausa' },
  { slug: 'formations', name: 'Formations', icon: '🖥️', description: 'Formations complètes' },
];

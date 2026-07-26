# 📚 Librairie Ramos

> **Votre bibliothèque numérique, accessible partout.**

Site vitrine professionnel Next.js 14 pour **Librairie Ramos** — boutique digitale spécialisée dans les e-books, formations et guides numériques en français et haoussa. Paiements et livraison gérés par **Chariow** via widgets officiels intégrés.

---

## ✨ Fonctionnalités

- 🎨 **Design premium** — Jaune doré (#FFCC00) + noir profond, 100% responsive
- 🛒 **Widgets Chariow** — Intégration officielle sur cartes produits + pages produits
- 🗄️ **Supabase** — Base de données PostgreSQL + Auth pour l'admin sécurisé
- 🔒 **Admin protégé** — Authentification email/password via Supabase Auth
- ⚡ **ISR (Incremental Static Regeneration)** — Rafraîchit les produits toutes les 60 s
- 🔍 **SEO complet** — Sitemap dynamique, robots.txt, Schema.org Product, Open Graph
- 📱 **Mobile-first** — Menu hamburger, bouton WhatsApp flottant
- 🌍 **Support multilingue** — Français et haoussa

---

## 🚠 Démarrage rapide

```bash
git clone https://github.com/Nouradine8080/librairie-ramos.git
cd librairie-ramos
npm install
cp .env.example .env.local
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### Variables d'environnement

```env
NEXT_PUBLIC_SUPABASE_URL=https://xkkyzutluluntpesztjl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_QBJar4XETRwtUsvOAhJi1Q_9iMiWiAR
NEXT_PUBLIC_CHARIOW_STORE_DOMAIN=librairie-ramos.mychariow.com
```

---

## 🗄️ Supabase

Les migrations SQL sont dans `supabase/migrations/`. La base est déjà configurée avec le project_ref `xkkyzutluluntpesztjl`.

---

## 👤 Accès Admin

- **URL** : [/admin](http://localhost:3000/admin)
- **Email** : `mahamadounouradine40@gmail.com`
- **Mot de passe** : celui fourni lors de la création du projet

---

## 🚢 Déploiement Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nouradine8080/librairie-ramos)

1. Importez le repo dans Vercel
2. Ajoutez les variables d'environnement
3. Deploy !

Voir [DEPLOYMENT.md](DEPLOYMENT.md) pour les détails.

---

## 📁 Structure

- `src/app/` — Pages Next.js App Router
- `src/components/` — Composants réutilisables (Header, Footer, ProductCard, ChariowWidget…)
- `src/lib/` — Supabase clients + types + config
- `supabase/migrations/` — Schéma SQL

---

## 🚌 Chariow

Les paiements sont traités exclusivement par Chariow via leurs widgets officiels. Boutique : [librairie-ramos.mychariow.com](https://librairie-ramos.mychariow.com)

---

MIT © 2026 Librairie Ramos

# 🚀 Guide de déploiement

## Prérequis

- Un compte [Vercel](https://vercel.com) (gratuit)
- Le projet Supabase déjà configuré (fait ✅)

## Étapes

### 1. Aller sur Vercel

Rendez-vous sur [https://vercel.com/new](https://vercel.com/new) et connectez-vous avec votre compte GitHub.

### 2. Importer le repo

- Cherchez `librairie-ramos` dans la liste
- Cliquez sur **Import**

### 3. Configurer les variables d'environnement

Dans l'écran de configuration, ajoutez ces variables :

| Nom | Valeur |
|-----|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xkkyzutluluntpesztjl.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_QBJar4XETRwtUsvOAhJi1Q_9iMiWiAR` |
| `NEXT_PUBLIC_CHARIOW_STORE_DOMAIN` | `librairie-ramos.mychariow.com` |
| `NEXT_PUBLIC_GA_ID` | *(optionnel, votre GA_MEASUREMENT_ID)* |

### 4. Deploy

Cliquez sur **Deploy**. Vercel construit le site en ~2 min.

### 5. Domaine personnalisé

Dans **Settings → Domains**, ajoutez votre domaine (ex: `librairieramos.com`).
Vercel vous donnera les enregistrements DNS à ajouter chez votre registrar.

### 6. Configurer Supabase Auth

Dans le dashboard Supabase → **Authentication → URL Configuration** :
- Site URL : `https://VOTRE_DOMAINE.com`
- Redirect URLs : `https://VOTRE_DOMAINE.com/admin/**`

C'est tout ! Votre site est en ligne 🎉

# ⏱️ Freelance Time Tracker

[🔗 Voir l'application en ligne (Live Demo)](https://freelance-time-tracker-lemon.vercel.app)

Un tracker de temps moderne, ultra-rapide et optimisé pour le SEO et l'expérience utilisateur, développé avec **Next.js (App Router)**, **Drizzle ORM** et **Neon (PostgreSQL)**.

---

## 🎯 Motivation du Projet

Ce projet a été initié avec un objectif clair : **monter en compétences sur la stack web la plus performante et moderne du marché pour l'appliquer directement dans mon activité de freelance.**

En tant que freelance, la vélocité de développement (DX) et la qualité finale du produit (UX/Performance) sont cruciales. Ce tracker me serve de vitrine technologique pour démontrer ma capacité à livrer des applications web robustes, scalables et centrées sur l'utilisateur, en maîtrisant les outils de pointe actuels.

---

## 🧠 Problématique & Solution Produit

### Le Problème
Pour un freelance, chaque minute compte, mais la gestion administrative est un gouffre de temps et d'énergie. Les outils de tracking actuels sont souvent des usines à gaz : lents à charger, saturés de fonctionnalités inutiles et complexes à prendre en main. Cette friction quotidienne pousse à la procrastination : on estime ses heures au doigt mouillé en fin de semaine, on oublie des sessions de travail, et **on finit par sous-facturer ses clients**.

### La Solution : Zéro friction, focus maximal
J'ai conçu ce tracker avec une philosophie d'efficacité pure : **supprimer la moindre micro-seconde de friction entre l'action du freelance et la sauvegarde de ses revenus.**

* **Vitesse absolue :** Grâce au rendu serveur (SSR) et au streaming de Next.js, l'application s'affiche instantanément. Le chronomètre est disponible en moins d'une seconde, sans aucun écran blanc visuel.
* **Ergonomie "Keyboard-First" :** Pas besoin de naviguer dans des menus complexes. Tu lances ton chrono, tu l'arrêtes, tu tapes le nom de ta tâche et tu appuies sur `Entrée`. L'application utilise les formulaires natifs et les *Server Actions* pour enregistrer la session instantanément en base de données.
* **Transparence et Sécurité :** Une liste fluide permet de suivre son historique en temps réel. Pour éviter toute fausse manipulation dans le rush des livraisons, une modale de confirmation sécurise la suppression des données.

C'est l'outil indispensable pour piloter sa rentabilité sans casser son flux de travail.

---

## 📂 Structure du Projet

Voici l'arborescence exacte des fichiers partagés sur le dépôt :

```text
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server Actions (saveSession, deleteSession)
│   │   ├── favicon.ico         # Icône du site
│   │   ├── globals.css         # Styles globaux et variables Tailwind
│   │   ├── layout.tsx          # Squelette HTML global et métadonnées
│   │   └── page.tsx            # Point d'entrée (Affiche le Timer et la liste)
│   ├── components/
│   │   ├── ui/                 # Composants atomiques Shadcn UI
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── input.tsx
│   │   ├── SessionItem.tsx     # Ligne de session + modale client de suppression
│   │   ├── SessionList.tsx     # Composant serveur asynchrone + son Skeleton UI
│   │   └── Timer.tsx           # Chronomètre global et formulaire de sauvegarde
│   ├── db/
│   │   ├── index.ts            # Connexion au client de base de données Neon
│   │   ├── queries.ts          # Requêtes SQL de sélection (Drizzle ORM)
│   │   └── schema.ts           # Schéma des tables SQL et inférence des types
│   └── lib/
│       └── utils.ts            # Fonctions utilitaires (Shadcn / Formateurs de temps)
│
├── .gitignore                  # Fichiers exclus de Git (ex: .env.local)
├── components.json             # Configuration de Shadcn UI
├── drizzle.config.ts           # Configuration de l'ORM Drizzle
├── AGENTS.md / CLAUDE.md       # Instructions de contexte de développement
└── README.md                   # Documentation du projet
```

---

## 🛠️ Stack Technique

* **Framework :** [Next.js 15+ (App Router)](https://nextjs.org/) avec Turbopack.
* **Base de données :** [Neon](https://neon.tech/) (PostgreSQL Serverless).
* **ORM :** [Drizzle ORM](https://orm.drizzle.team/).
* **Design & UI :** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) (Radix UI & Lucide Icons).
* **Déploiement :** [Vercel](https://vercel.com/).

---

## 💻 Lancer le projet en local

### 1. Prérequis
Assure-toi d'avoir [Node.js](https://nodejs.org/) installé sur ta machine.

### 2. Cloner le dépôt
```bash
git clone https://github.com/ton-pseudo/ton-repo.git
cd ton-repo
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Configurer la base de données
Crée un fichier `.env.local` à la racine (ce fichier est ignoré par Git pour des raisons de sécurité) et colles-y ton URL de connexion Neon :
```env
DATABASE_URL=postgresql://les-identifiants-de-ta-base
```

### 5. Lancer le serveur de développement
```bash
npm run dev
```
Ouvre ensuite [http://localhost:3000](http://localhost:3000) pour tester l'application.

---

## 🌐 Déploiement

Le projet est déployé en continu sur **Vercel** :
* Chaque `git push` sur la branche `main` déclenche un build automatisé.
* La variable d'environnement `DATABASE_URL` est injectée de manière sécurisée dans le tableau de bord Vercel pour faire la liaison avec le cluster Neon de production.
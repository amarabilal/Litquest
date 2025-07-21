# 📚 LitQuest

**LitQuest** est une application web moderne construite avec Nuxt 3 et Vue.js, permettant aux utilisateurs de rechercher, organiser, annoter et noter leurs livres préférés.
Inspirée de Letterboxd mais pour les amateurs de lecture 📖

---

## 🚀 Fonctionnalités principales

- 🔎 Recherche de livres via l’API Google Books
- 🧠 Ajout à une bibliothèque personnelle
- ✅ Suivi de statut : _à lire_, _en cours_, _lu_
- ⭐ Notation des livres
- 📝 Ajout de notes personnelles
- 🏷️ Gestion de tags personnalisés
- 🌗 Mode sombre / clair
- 📱 Design responsive & mobile-first

---

## 🛠️ Technologies utilisées

- [Nuxt 3](https://nuxt.com/) (Vue 3 + SSR)
- [Pinia](https://pinia.vuejs.org/) pour le state management
- [Tailwind CSS](https://tailwindcss.com/) pour le design
- [TypeScript](https://www.typescriptlang.org/) pour la robustesse
- [Vitest](https://vitest.dev/) pour les tests unitaires
- Google Books API

---

## 📁 Structure du projet

```

litquest/
│
├── pages/              # Pages Nuxt (index, search, library, book/\[id])
├── components/         # Composants réutilisables (BookCard, Rating, etc.)
├── stores/             # Store Pinia (useLibraryStore)
├── composables/        # Composables personnalisés (useGoogleBooks, useTags)
├── assets/css/         # Fichier Tailwind
├── types/              # Déclarations TypeScript
└── public/             # Favicon, robots.txt, etc.

````

---

## 🧪 Tests

Le store `useLibraryStore` est couvert par des tests unitaires avec **Vitest** :
```bash
npx vitest run
````

---

## 📦 Installation locale

```bash
git clone https://github.com/amarabilal/Litquest.git
cd Litquest
npm install
npm run dev
```

---

## 🎨 Charte graphique

* Palette moderne : beige / noir / amber
* Design épuré et accessible
* Icônes via HeroIcons (SVG)
* Mobile-first (responsive)

---

## 🙌 Auteurs

Développé par **Bilal Amara** dans le cadre du projet final Vue.js – ESGI 2025.
Encadré par **Romain Divandary**.

---

## 📃 Licence

Ce projet est open-source. Tu peux le réutiliser, l’améliorer ou t’en inspirer librement. Attribution appréciée.

---
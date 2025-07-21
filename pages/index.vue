<template>
  <section class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 pt-12 pb-6">

    <!-- 🧭 Accroche principale -->
    <div class="max-w-4xl mx-auto text-center space-y-6 mb-16">
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
        Bienvenue sur <span class="text-amber-600">LitQuest</span>
      </h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Organisez, annotez et suivez vos lectures comme jamais auparavant. Une application pensée pour les lecteurs passionnés.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <NuxtLink
          to="/search"
          class="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded shadow transition"
        >
          <span class="inline-flex items-center gap-2">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
            </svg>
            Rechercher un livre
          </span>
        </NuxtLink>

        <NuxtLink
          to="/library"
          class="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded transition"
        >
          <span class="inline-flex items-center gap-2">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 19.5A2.5 2.5 0 016.5 17H20m-14 2.5V5a2.5 2.5 0 012.5-2.5H20v14.5H6.5A2.5 2.5 0 014 19.5z" />
            </svg>
            Ma bibliothèque
          </span>
        </NuxtLink>
      </div>
    </div>

    <!-- ⚙️ Fonctionnalités -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
      <div class="flex flex-col items-center text-center space-y-2">
        <svg class="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
        </svg>
        <h3 class="font-bold text-lg">Recherche rapide</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Trouvez instantanément vos livres préférés grâce à l’API Google Books.</p>
      </div>

      <div class="flex flex-col items-center text-center space-y-2">
        <svg class="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <h3 class="font-bold text-lg">Suivi de lecture</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Classez vos livres par statut : à lire, en cours ou terminés.</p>
      </div>

      <div class="flex flex-col items-center text-center space-y-2">
        <svg class="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 17a4 4 0 004-4V5a4 4 0 00-8 0v8a4 4 0 004 4z" />
        </svg>
        <h3 class="font-bold text-lg">Notes & Tags</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Ajoutez vos avis, annotations personnelles et tags personnalisés.</p>
      </div>
    </div>

    <!-- 🎒 Aperçu bibliothèque -->
    <div v-if="libraryStore.books.length" class="max-w-5xl mx-auto mt-10">
      <h2 class="text-2xl font-bold mb-4">Un aperçu de votre bibliothèque</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <BookCard
          v-for="book in libraryStore.books.slice(0, 3)"
          :key="book.id"
          v-bind="book"
          :compact="true"
          :showActions="false"
        />
      </div>

      <div class="mt-6 text-center">
        <NuxtLink to="/library" class="text-amber-600 hover:underline font-medium">
          Voir toute ma bibliothèque →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLibraryStore } from '~/stores/useLibraryStore'
import BookCard from '~/components/BookCard.vue'

const libraryStore = useLibraryStore()
</script>

<style scoped>
</style>

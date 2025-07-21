<script setup lang="ts">
import SearchBar from '~/components/SearchBar.vue'
import BookCard from '~/components/BookCard.vue'
import { useGoogleBooks } from '~/composables/useGoogleBooks'
import { useLibraryStore } from '~/stores/useLibraryStore'
import type { BookResult } from '~/types/book'

const { books, isLoading, error, searchBooks } = useGoogleBooks()
const libraryStore = useLibraryStore()

const handleAddToLibrary = (book: BookResult) => {
  libraryStore.addBook(book)
}

const handleRemoveFromLibrary = (id: string) => {
  libraryStore.removeBook(id)
}

const isInLibrary = (id: string) => {
  return libraryStore.books.some(book => book.id === id)
}
</script>

<template>
  <section class="px-4 py-10 max-w-5xl mx-auto text-gray-900 dark:text-white">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6">
      Rechercher un livre
    </h1>

    <div class="max-w-xl mx-auto mb-8">
      <SearchBar @search="searchBooks" />
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="text-center text-amber-600 font-medium">
      Chargement des résultats...
    </div>

    <!-- Erreur -->
    <div v-if="error" class="text-center text-red-500 font-medium">
      {{ error }}
    </div>

    <!-- Résultats -->
    <div v-if="books.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :title="book.title"
        :authors="book.authors"
        :thumbnail="book.thumbnail"
        :description="book.description"
        :inLibrary="isInLibrary(book.id)"
        :showActions="true"
        @add="handleAddToLibrary"
        @remove="handleRemoveFromLibrary"
      />
    </div>

    <!-- Aucun résultat -->
    <div v-else-if="!isLoading" class="text-center text-gray-500 dark:text-gray-400 mt-6">
      Aucun résultat pour l’instant. Essayez une autre recherche.
    </div>
  </section>
</template>

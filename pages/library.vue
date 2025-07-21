<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLibraryStore } from '~/stores/useLibraryStore'
import BookCard from '~/components/BookCard.vue'

const libraryStore = useLibraryStore()
const selectedStatus = ref('tous')

const handleRemove = (id: string) => {
  libraryStore.removeBook(id)
}

const handleStatusChange = (id: string, event: Event) => {
  const newStatus = (event.target as HTMLSelectElement).value as 'à lire' | 'en cours' | 'lu'
  libraryStore.updateStatus(id, newStatus)
}

const filteredBooks = computed(() => {
  if (selectedStatus.value === 'tous') return libraryStore.books
  return libraryStore.books.filter(book => book.status === selectedStatus.value)
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Ma bibliothèque</h1>

    <!-- 🔽 Filtres -->
    <div class="mb-6">
      <label class="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Filtrer par statut :</label>
      <select
        v-model="selectedStatus"
        class="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded px-3 py-1 text-gray-800 dark:text-white focus:outline-none"
      >
        <option value="tous">Tous les livres</option>
        <option value="à lire">À lire</option>
        <option value="en cours">En cours</option>
        <option value="lu">Lu</option>
      </select>
    </div>

    <!-- 🔍 Résultats -->
    <div v-if="filteredBooks.length === 0" class="text-gray-500 dark:text-gray-400">
      Aucun livre trouvé.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <BookCard
        v-for="book in filteredBooks"
        :key="book.id"
        :id="book.id"
        :title="book.title"
        :authors="book.authors"
        :thumbnail="book.thumbnail"
        :description="book.description"
        :showActions="false"
        :compact="true"
      >
        <template #actions>
          <div class="flex flex-col items-end gap-2">
            <select
              class="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              :value="book.status"
              @change="handleStatusChange(book.id, $event)"
            >
              <option value="à lire">À lire</option>
              <option value="en cours">En cours</option>
              <option value="lu">Lu</option>
            </select>

            <button
              @click="handleRemove(book.id)"
              class="px-3 py-1 text-sm text-white bg-red-600 hover:bg-red-700 rounded transition"
            >
              Supprimer
            </button>
          </div>
        </template>
      </BookCard>
    </div>
  </div>
</template>

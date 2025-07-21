<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const emit = defineEmits<{
  (e: 'search', query: string): void
}>()

const submitSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.trim())
  }
}
</script>

<template>
  <form @submit.prevent="submitSearch" class="relative w-full max-w-xl">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un livre..."
      class="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
    />
    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </div>
  </form>
</template>

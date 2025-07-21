<template>
  <header class="bg-white dark:bg-gray-950 shadow-md py-4 px-6 sticky top-0 z-50 transition-colors">
    <nav class="max-w-5xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-extrabold text-amber-600 hover:opacity-80 transition">
        LitQuest
      </NuxtLink>

      <!-- Navigation -->
      <div class="flex items-center gap-5 text-sm">
        <!-- Recherche -->
        <NuxtLink
          to="/search"
          class="flex items-center gap-1 hover:text-amber-600 text-gray-700 dark:text-gray-300 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          Recherche
        </NuxtLink>

        <!-- Bibliothèque -->
        <NuxtLink
          to="/library"
          class="flex items-center gap-1 hover:text-amber-600 text-gray-700 dark:text-gray-300 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
          </svg>
          Bibliothèque
        </NuxtLink>

        <!-- Dark mode -->
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark.value)
})

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

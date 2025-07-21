<template>
  <footer class="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700 mt-6">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
      <NuxtLink
        to="/charte"
        class="hover:underline hover:text-amber-600 dark:hover:text-amber-400 transition"
      >
        Charte d'utilisation
      </NuxtLink>

      <span class="hidden sm:inline">•</span>

      <NuxtLink
        to="/confidentialite"
        class="hover:underline hover:text-amber-600 dark:hover:text-amber-400 transition"
      >
        Confidentialité
      </NuxtLink>

      <span class="hidden sm:inline">•</span>

      <NuxtLink
        to="/about"
        class="hover:underline hover:text-amber-600 dark:hover:text-amber-400 transition"
      >
        À propos
      </NuxtLink>
    </div>

    <p class="mt-2">&copy; 2025 — LitQuest • Projet ESGI Vue.js</p>
  </footer>
</template>

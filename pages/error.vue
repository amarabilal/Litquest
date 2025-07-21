<template>
    <div
      class="flex flex-col items-center justify-center text-center px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <!-- Livre animé -->
      <Motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } }"
        class="mb-6"
      >
        <svg
          class="w-20 h-20 text-amber-600"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75L17.25 4.5V16.5L12 18.75M12 6.75L6.75 4.5V16.5L12 18.75M12 6.75V18.75"
          />
        </svg>
      </Motion>
  
      <!-- Texte animé -->
      <Motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 0.2 } }"
      >
        <h1 class="text-6xl font-extrabold text-amber-600 mb-4">404</h1>
        <p class="text-xl mb-2">Page introuvable</p>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Ce livre semble introuvable dans notre collection.
        </p>
  
        <NuxtLink
          to="/"
          class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium transition"
        >
          Revenir à l’accueil
        </NuxtLink>
      </Motion>
    </div>
  </template>
<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <NuxtLayout>
    <NavBar />
    <main class="flex-1 container mx-auto px-4 py-8">
      <NuxtPage />
    </main>
    <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>

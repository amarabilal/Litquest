<script setup lang="ts">
import type { BookResult } from '~/types/book'

const props = defineProps<BookResult & {
  inLibrary?: boolean
  showActions?: boolean
  compact?: boolean
}>()

const emit = defineEmits<{
  (e: 'add', book: BookResult): void
  (e: 'remove', id: string): void
}>()

const handleClick = () => {
  if (props.inLibrary) {
    emit('remove', props.id)
  } else {
    emit('add', {
      id: props.id,
      title: props.title,
      authors: props.authors,
      thumbnail: props.thumbnail,
      description: props.description
    })
  }
}
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex gap-4 transition hover:shadow-md"
    :class="compact ? 'items-start min-h-[160px]' : 'flex-col sm:flex-row'"
  >
    <!-- Image -->
    <NuxtLink :to="`/book/${id}`" class="shrink-0">
      <img
        :src="thumbnail"
        alt="Couverture"
        class="object-cover rounded-md"
        :class="compact ? 'w-16 h-24' : 'w-24 h-36 hover:scale-105 transition-transform duration-200'"
        v-if="thumbnail"
      />
    </NuxtLink>

    <!-- Texte + bouton -->
    <div class="flex-1 flex justify-between items-start gap-4">
      <div class="flex-1">
        <NuxtLink
          :to="`/book/${id}`"
          class="text-lg font-bold"
          :class="compact ? '' : 'hover:underline text-amber-600 dark:text-amber-400 block mb-1'"
        >
          {{ title }}
        </NuxtLink>

        <p class="text-sm italic text-gray-600 dark:text-gray-400 mb-1">
          {{ authors.join(', ') }}
        </p>

        <p
          v-if="!compact"
          class="text-sm text-gray-700 dark:text-gray-300 line-clamp-4 mb-4"
        >
          {{ description }}
        </p>

        <button
          v-if="showActions"
          @click="handleClick"
          :class="[
            'mt-2 px-4 py-1.5 text-sm font-medium rounded transition duration-200',
            inLibrary
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-amber-600 hover:opacity-80 text-white'
          ]"
        >
          {{ inLibrary ? 'Retirer de ma bibliothèque' : 'Ajouter à ma bibliothèque' }}
        </button>
      </div>

      <!-- Slot personnalisé -->
      <div v-if="compact" class="shrink-0 flex flex-col gap-2 items-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

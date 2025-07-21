<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useLibraryStore } from '~/stores/useLibraryStore'
import { ref, watch } from 'vue'
import { useTags } from '~/composables/useTags'
import Rating from '~/components/Rating.vue'

const route = useRoute()
const router = useRouter()
const store = useLibraryStore()
const { allTags } = useTags()

const newTag = ref('')
const bookId = route.params.id as string
const book = store.books.find(b => b.id === bookId)

const note = ref(book?.note || '')
const rating = ref(book?.rating || 0)

watch(note, newNote => store.addNote(bookId, newNote))
watch(rating, newRating => store.updateRating(bookId, newRating))

if (!book) router.push('/library')

const submitTag = () => {
  const tag = newTag.value.trim()
  if (tag && !book?.tags?.includes(tag)) {
    store.addTag(bookId, tag)
    newTag.value = ''
  }
}

const removeTag = (tag: string) => {
  store.removeTag(bookId, tag)
}
</script>

<template>
  <div v-if="book" class="max-w-4xl mx-auto px-4 py-8">
    <NuxtLink
      to="/library"
      class="text-amber-700 dark:text-amber-400 underline text-sm hover:text-amber-800 dark:hover:text-amber-300 transition"
    >
      &larr; Retour à la bibliothèque
    </NuxtLink>

    <div class="mt-4 flex flex-col sm:flex-row gap-6">
      <img
        :src="book.thumbnail"
        alt="Couverture"
        class="w-32 h-48 object-cover rounded shadow mx-auto sm:mx-0"
        v-if="book.thumbnail"
      />

      <div class="flex-1">
        <h1 class="text-2xl font-bold mb-1">{{ book.title }}</h1>
        <p class="text-sm italic text-gray-600 dark:text-gray-400 mb-2">{{ book.authors.join(', ') }}</p>
        <p class="text-gray-800 dark:text-gray-200 text-sm mb-4 whitespace-pre-line">{{ book.description }}</p>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">Ma note :</label>
          <Rating v-model="rating" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">Note personnelle :</label>
          <textarea
            v-model="note"
            class="w-full h-32 p-3 border border-gray-300 rounded shadow-sm text-sm "
            placeholder="Tes impressions, résumé perso, coup de cœur, critique..."
          ></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">Tags personnalisés :</label>
          <div class="flex gap-2 mb-2 flex-wrap">
            <span
              v-for="tag in book.tags"
              :key="tag"
              class="bg-blue-100 text-amber-600 px-2 py-1 rounded text-sm flex items-center gap-1"
            >
              {{ tag }}
              <button @click="removeTag(tag)" class="hover:text-red-600">×</button>
            </span>
          </div>

          <form @submit.prevent="submitTag" class="flex gap-2">
            <input
              v-model="newTag"
              list="tag-options"
              type="text"
              placeholder="Ajouter un tag..."
              class="flex-1 px-2 py-1 text-sm border rounded"
            />
            <datalist id="tag-options">
              <option v-for="tag in allTags" :key="tag" :value="tag" />
            </datalist>

            <button
              type="submit"
              class="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700 transition"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

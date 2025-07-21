import { computed } from 'vue'
import { useLibraryStore } from '~/stores/useLibraryStore'

export function useTags() {
  const store = useLibraryStore()

  const allTags = computed(() => {
    const tagsSet = new Set<string>()
    store.books.forEach(book => book.tags?.forEach(tag => tagsSet.add(tag)))
    return Array.from(tagsSet)
  })

  return { allTags }
}

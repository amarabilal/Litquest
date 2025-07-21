import { ref } from 'vue'
import type { BookResult } from '~/types/book'

export function useGoogleBooks() {
  const books = ref<BookResult[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>()

  const searchBooks = async (query: string) => {
    if (!query) return

    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
      )
      const data = await response.json()

      books.value = data.items?.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Auteur inconnu'],
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
        description: item.volumeInfo.description || 'Aucune description disponible'
      })) || []
    } catch (err) {
      error.value = 'Erreur lors de la recherche'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    books,
    isLoading,
    error,
    searchBooks
  }
}

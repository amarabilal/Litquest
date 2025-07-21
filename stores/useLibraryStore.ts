import { defineStore } from 'pinia'
import type { LibraryBook, BookStatus } from '~/types/library'
import { ref } from 'vue'

export const useLibraryStore = defineStore('library', () => {
  const books = ref<LibraryBook[]>([])

  const addBook = (book: Omit<LibraryBook, 'status' | 'note' | 'tags'>) => {
    const exists = books.value.find(b => b.id === book.id)
    if (!exists) {
      books.value.push({ ...book, status: 'à lire', note: '', tags: [] })
    }
  }

  const removeBook = (id: string) => {
    books.value = books.value.filter(b => b.id !== id)
  }

  const updateStatus = (id: string, newStatus: BookStatus) => {
    const book = books.value.find(b => b.id === id)
    if (book) book.status = newStatus
  }

  const addNote = (id: string, newNote: string) => {
    const book = books.value.find(b => b.id === id)
    if (book) book.note = newNote
  }

  const addTag = (id: string, tag: string) => {
    const book = books.value.find(b => b.id === id)
    if (book && !book.tags?.includes(tag)) {
      book.tags?.push(tag)
    }
  }

  const removeTag = (id: string, tag: string) => {
    const book = books.value.find(b => b.id === id)
    if (book) {
      book.tags = book.tags?.filter(t => t !== tag)
    }
  }

  const updateRating = (id: string, value: number) => {
    const book = books.value.find(b => b.id === id)
    if (book) book.rating = value
  }


  return {
    books,
    addBook,
    removeBook,
    updateStatus,
    addNote,
    addTag,
    removeTag,
    updateRating
  }
},
{
  persist: true
})

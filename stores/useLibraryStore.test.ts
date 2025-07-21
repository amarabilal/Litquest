import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useLibraryStore } from './useLibraryStore'

describe('useLibraryStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('ajoute un livre à la bibliothèque', () => {
    const store = useLibraryStore()
    store.addBook({
      id: '123',
      title: 'Test Book',
      authors: ['Author A'],
      thumbnail: '',
      description: ''
    })

    expect(store.books.length).toBe(1)
    expect(store.books[0].title).toBe('Test Book')
  })

  it('retire un livre de la bibliothèque', () => {
    const store = useLibraryStore()
    store.addBook({
      id: '456',
      title: 'To Remove',
      authors: ['B'],
      thumbnail: '',
      description: ''
    })
    store.removeBook('456')

    expect(store.books.length).toBe(0)
  })

  it('met à jour le statut d’un livre', () => {
    const store = useLibraryStore()
    store.addBook({
      id: '789',
      title: 'Status Test',
      authors: ['C'],
      thumbnail: '',
      description: ''
    })
    store.updateStatus('789', 'lu')

    expect(store.books[0].status).toBe('lu')
  })

  it('ajoute une note personnelle à un livre', () => {
    const store = useLibraryStore()
    store.addBook({
      id: 'note1',
      title: 'Noté',
      authors: ['X'],
      thumbnail: '',
      description: ''
    })
    store.addNote('note1', 'Excellent livre')

    expect(store.books[0].note).toBe('Excellent livre')
  })

  it('ajoute et retire un tag à un livre', () => {
    const store = useLibraryStore()
    store.addBook({
      id: 'tag1',
      title: 'Taggable',
      authors: ['Y'],
      thumbnail: '',
      description: ''
    })

    store.addTag('tag1', 'fantasy')
    expect(store.books[0].tags).toContain('fantasy')

    store.removeTag('tag1', 'fantasy')
    expect(store.books[0].tags).not.toContain('fantasy')
  })

  it('met à jour la note en étoiles (rating) d’un livre', () => {
    const store = useLibraryStore()
    store.addBook({
      id: 'rate1',
      title: 'Étoilé',
      authors: ['Z'],
      thumbnail: '',
      description: ''
    })

    store.updateRating('rate1', 4)
    expect(store.books[0].rating).toBe(4)
  })
})
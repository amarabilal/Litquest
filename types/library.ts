export type BookStatus = 'à lire' | 'en cours' | 'lu'

export interface LibraryBook {
  id: string
  title: string
  authors: string[]
  thumbnail: string
  description: string
  status: BookStatus
  note?: string
  tags?: string[]
  rating?: number
}

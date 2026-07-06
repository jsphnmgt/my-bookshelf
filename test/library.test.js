// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { Book, RatedBook, Shelf, fetchBook, safeFetch } from '../src/js/library.js'

describe('Book', () => {
  it('stores its fields', () => {
    const b = new Book('Dune', 'Herbert', 412)
    expect(b.title).toBe('Dune')
    expect(b.author).toBe('Herbert')
    expect(b.pages).toBe(412)
  })
  it('summarises itself', () => {
    expect(new Book('Dune', 'Herbert', 412).summary()).toBe('Dune by Herbert (412 pages)')
  })
})

describe('RatedBook', () => {
  it('is a Book (inheritance)', () => {
    expect(new RatedBook('Dune', 'Herbert', 412, 5)).toBeInstanceOf(Book)
  })
  it('reuses the parent summary and appends the rating', () => {
    expect(new RatedBook('Dune', 'Herbert', 412, 5).summary()).toBe(
      'Dune by Herbert (412 pages) - rated 5/5',
    )
  })
})

describe('Shelf', () => {
  it('starts empty and counts added books with a size getter', () => {
    const s = new Shelf()
    expect(s.size).toBe(0)
    s.add(new Book('Dune', 'Herbert', 412))
    s.add(new Book('Emma', 'Austen', 474))
    expect(s.size).toBe(2)
  })
  it('finds books by author', () => {
    const s = new Shelf()
    const dune = new Book('Dune', 'Herbert', 412)
    s.add(dune)
    s.add(new Book('Emma', 'Austen', 474))
    expect(s.byAuthor('Herbert')).toEqual([dune])
  })
  it('returns an empty array for an unknown author', () => {
    expect(new Shelf().byAuthor('Nobody')).toEqual([])
  })
})

describe('fetchBook (async + throw)', () => {
  const db = { 1: { title: 'Dune' } }
  it('resolves to the matching book', async () => {
    await expect(fetchBook(1, db)).resolves.toEqual({ title: 'Dune' })
  })
  it('throws "No book with id <id>" when missing', async () => {
    await expect(fetchBook(9, db)).rejects.toThrow('No book with id 9')
  })
})

describe('safeFetch (try / catch)', () => {
  const db = { 1: { title: 'Dune' } }
  it('returns the book when it exists', async () => {
    await expect(safeFetch(1, db)).resolves.toEqual({ title: 'Dune' })
  })
  it('returns null instead of throwing when missing', async () => {
    await expect(safeFetch(9, db)).resolves.toBeNull()
  })
})

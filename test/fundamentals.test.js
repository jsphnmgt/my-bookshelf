// @vitest-environment node
import { describe, it, expect } from 'vitest'
import {
  initials,
  titleCase,
  isLongTitle,
  totalPages,
  finishedTitles,
  findByTitle,
  averagePages,
  addTag,
  makeCounter,
  groupByAuthor,
} from '../src/js/fundamentals.js'

const books = [
  { id: 1, title: 'Dune', author: 'Herbert', pages: 412, finished: true },
  { id: 2, title: 'Emma', author: 'Austen', pages: 474, finished: false },
  { id: 3, title: 'Persuasion', author: 'Austen', pages: 256, finished: true },
]

describe('initials', () => {
  it('takes the first letter of each word, uppercased', () => {
    expect(initials('Ada Lovelace')).toBe('AL')
  })
  it('works for three lower-case words', () => {
    expect(initials('grace murray hopper')).toBe('GMH')
  })
})

describe('titleCase', () => {
  it('capitalises the first letter of every word', () => {
    expect(titleCase('the great gatsby')).toBe('The Great Gatsby')
  })
  it('lower-cases the rest of each word', () => {
    expect(titleCase('WAR and PEACE')).toBe('War And Peace')
  })
})

describe('isLongTitle', () => {
  it('is false for a short title', () => {
    expect(isLongTitle('Dune')).toBe(false)
  })
  it('is true past the default of 20 characters', () => {
    expect(isLongTitle('A Very Long Title Indeed Yes')).toBe(true)
  })
  it('respects a custom max', () => {
    expect(isLongTitle('Six chars', 5)).toBe(true)
  })
})

describe('totalPages', () => {
  it('sums every book.pages', () => {
    expect(totalPages(books)).toBe(412 + 474 + 256)
  })
  it('is 0 for no books', () => {
    expect(totalPages([])).toBe(0)
  })
})

describe('finishedTitles', () => {
  it('returns only the finished titles, in order', () => {
    expect(finishedTitles(books)).toEqual(['Dune', 'Persuasion'])
  })
})

describe('findByTitle', () => {
  it('finds an exact title', () => {
    expect(findByTitle(books, 'Emma')).toEqual(books[1])
  })
  it('returns undefined when nothing matches', () => {
    expect(findByTitle(books, 'Nope')).toBeUndefined()
  })
})

describe('averagePages', () => {
  it('rounds the mean page count', () => {
    expect(averagePages([{ pages: 100 }, { pages: 300 }])).toBe(200)
  })
  it('is 0 for an empty array (no divide by zero)', () => {
    expect(averagePages([])).toBe(0)
  })
})

describe('addTag', () => {
  it('returns a new book with the tag appended', () => {
    const book = { title: 'Dune', tags: ['sci-fi'] }
    expect(addTag(book, 'classic')).toEqual({ title: 'Dune', tags: ['sci-fi', 'classic'] })
  })
  it('does not mutate the original book', () => {
    const book = { title: 'Dune', tags: ['sci-fi'] }
    addTag(book, 'classic')
    expect(book.tags).toEqual(['sci-fi'])
  })
})

describe('makeCounter', () => {
  it('counts up from 1 on each call', () => {
    const next = makeCounter()
    expect(next()).toBe(1)
    expect(next()).toBe(2)
    expect(next()).toBe(3)
  })
  it('makes independent counters (closure)', () => {
    const a = makeCounter()
    const b = makeCounter()
    a()
    a()
    expect(b()).toBe(1)
  })
})

describe('groupByAuthor', () => {
  it('maps each author to their titles in order', () => {
    expect(groupByAuthor(books)).toEqual({
      Herbert: ['Dune'],
      Austen: ['Emma', 'Persuasion'],
    })
  })
})

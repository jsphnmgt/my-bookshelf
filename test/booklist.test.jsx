import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookList from '../src/components/BookList.jsx'

const books = [
  { id: 1, title: 'Dune', author: 'Herbert', finished: true },
  { id: 2, title: 'Emma', author: 'Austen', finished: false },
]

describe('BookList', () => {
  it('renders one list item per book', () => {
    render(<BookList books={books} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('shows each book title', () => {
    render(<BookList books={books} />)
    expect(screen.getByText(/Dune/)).toBeInTheDocument()
    expect(screen.getByText(/Emma/)).toBeInTheDocument()
  })

  it('shows an empty state and no items when there are no books', () => {
    render(<BookList books={[]} />)
    expect(screen.getByText('No books yet')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})

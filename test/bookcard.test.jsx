import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookCard from '../src/components/BookCard.jsx'

describe('BookCard', () => {
  it('shows the title in a heading', () => {
    render(<BookCard title="Dune" author="Herbert" finished={true} />)
    expect(screen.getByRole('heading', { name: /dune/i })).toBeInTheDocument()
  })

  it('shows the author', () => {
    render(<BookCard title="Dune" author="Herbert" finished={true} />)
    expect(screen.getByText(/by Herbert/i)).toBeInTheDocument()
  })

  it('shows "Finished" when finished is true', () => {
    render(<BookCard title="Dune" author="Herbert" finished={true} />)
    expect(screen.getByText('Finished')).toBeInTheDocument()
    expect(screen.queryByText('Reading')).not.toBeInTheDocument()
  })

  it('shows "Reading" when finished is false', () => {
    render(<BookCard title="Dune" author="Herbert" finished={false} />)
    expect(screen.getByText('Reading')).toBeInTheDocument()
    expect(screen.queryByText('Finished')).not.toBeInTheDocument()
  })
})

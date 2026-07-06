import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Bookshelf from '../src/components/Bookshelf.jsx'

describe('Bookshelf', () => {
  it('shows the starting count from initialBooks', () => {
    render(<Bookshelf initialBooks={[{ id: 1, title: 'Dune', author: 'Herbert' }]} />)
    expect(screen.getByText('Books: 1')).toBeInTheDocument()
  })

  it('defaults to an empty shelf', () => {
    render(<Bookshelf />)
    expect(screen.getByText('Books: 0')).toBeInTheDocument()
  })

  it('adds a book through the form and updates the list and count', async () => {
    const user = userEvent.setup()
    render(<Bookshelf />)
    await user.type(screen.getByLabelText(/title/i), 'Dune')
    await user.type(screen.getByLabelText(/author/i), 'Herbert')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.getByText('Books: 1')).toBeInTheDocument()
    expect(screen.getByRole('listitem')).toHaveTextContent('Dune')
  })
})

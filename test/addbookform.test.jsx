import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddBookForm from '../src/components/AddBookForm.jsx'

describe('AddBookForm', () => {
  it('renders Title and Author inputs and an Add button', () => {
    render(<AddBookForm onAdd={() => {}} />)
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  it('calls onAdd with the typed title and author', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddBookForm onAdd={onAdd} />)
    await user.type(screen.getByLabelText(/title/i), 'Dune')
    await user.type(screen.getByLabelText(/author/i), 'Herbert')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(onAdd).toHaveBeenCalledWith({ title: 'Dune', author: 'Herbert' })
  })

  it('clears the inputs after a successful add', async () => {
    const user = userEvent.setup()
    render(<AddBookForm onAdd={() => {}} />)
    const title = screen.getByLabelText(/title/i)
    const author = screen.getByLabelText(/author/i)
    await user.type(title, 'Dune')
    await user.type(author, 'Herbert')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(title).toHaveValue('')
    expect(author).toHaveValue('')
  })

  it('shows an error and does not call onAdd when the title is empty', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddBookForm onAdd={onAdd} />)
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.getByText('Title is required')).toBeInTheDocument()
    expect(onAdd).not.toHaveBeenCalled()
  })
})

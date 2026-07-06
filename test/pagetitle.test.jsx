import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import PageTitle from '../src/components/PageTitle.jsx'

describe('PageTitle (useEffect)', () => {
  it('sets document.title to the prop', () => {
    render(<PageTitle title="My Bookshelf" />)
    expect(document.title).toBe('My Bookshelf')
  })

  it('updates document.title when the prop changes', () => {
    const { rerender } = render(<PageTitle title="First" />)
    expect(document.title).toBe('First')
    rerender(<PageTitle title="Second" />)
    expect(document.title).toBe('Second')
  })
})

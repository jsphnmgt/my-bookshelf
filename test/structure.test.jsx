import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'

// Checks that App assembles the page with the required semantic landmarks.
// (App provides its own <BrowserRouter>, so it renders on its own here.)
describe('App structure', () => {
  it('has exactly one <h1>', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('has a <nav>', () => {
    render(<App />)
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1)
  })

  it('has a <main>', () => {
    render(<App />)
    expect(screen.getAllByRole('main').length).toBeGreaterThanOrEqual(1)
  })
})

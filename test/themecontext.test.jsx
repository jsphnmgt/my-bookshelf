import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ThemeLabel, { ThemeContext } from '../src/components/ThemeContext.jsx'

describe('ThemeContext', () => {
  it('uses the default value when there is no provider', () => {
    render(<ThemeLabel />)
    expect(screen.getByText('Theme: light')).toBeInTheDocument()
  })

  it('reads the value from a Provider', () => {
    render(
      <ThemeContext.Provider value="dark">
        <ThemeLabel />
      </ThemeContext.Provider>,
    )
    expect(screen.getByText('Theme: dark')).toBeInTheDocument()
  })
})

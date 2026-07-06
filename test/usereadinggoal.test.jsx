import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useReadingGoal from '../src/hooks/useReadingGoal.js'

describe('useReadingGoal', () => {
  it('starts at the initial value', () => {
    const { result } = renderHook(() => useReadingGoal(2))
    expect(result.current.count).toBe(2)
  })

  it('defaults to 0', () => {
    const { result } = renderHook(() => useReadingGoal())
    expect(result.current.count).toBe(0)
  })

  it('addBook increments and reset returns to 0', () => {
    const { result } = renderHook(() => useReadingGoal())
    act(() => result.current.addBook())
    act(() => result.current.addBook())
    expect(result.current.count).toBe(2)
    act(() => result.current.reset())
    expect(result.current.count).toBe(0)
  })
})

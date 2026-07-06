// ───────────────────────────────────────────────────────────────────────────
// PART 8 - Context: share a value without prop-drilling  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// Context lets a value (here, a theme name) reach any descendant without
// passing it through every component as a prop.
//
// 1. Create a context whose DEFAULT value is the string  'light'
//    and export it as a NAMED export called  ThemeContext.
//
// 2. Export (default) a component  ThemeLabel  that reads the context with
//    useContext and renders the exact text  Theme: <value>
//    e.g. with no provider it shows  Theme: light
//         inside a Provider value="dark" it shows  Theme: dark

import { createContext, useContext } from 'react'

// TODO: create and export the context with default 'light'
export const ThemeContext = /* TODO */ null

export default function ThemeLabel() {
  // TODO: read the context value and render  Theme: <value>
  return null
}

// ───────────────────────────────────────────────────────────────────────────
// PART 11 - App: assemble the page + structure + styling  (Modules 2 & 3)
// ───────────────────────────────────────────────────────────────────────────
//
// Put the app together. The automated checks render <App /> and look for these
// landmarks:
//
//   - exactly one <h1> (the app title, e.g. "My Bookshelf")
//   - a <nav> containing router <Link>s to "/" and "/about"
//   - a <main> that holds the page content
//   - your routes rendered with <AppRoutes /> (Part 10)
//   - your <Bookshelf /> (Part 6) somewhere on the page
//
// Because you use <Link>, the whole app must be wrapped in a <BrowserRouter>.
//
// STYLING (Module 3): style this app with a REAL styling approach, not only
// inline style={{}}. The simplest path with no extra install: create
// `src/App.module.css`, add a class or two, and import it here
// (`import styles from './App.module.css'`). Tailwind / styled-components / a UI
// library also count. Make it look tidy and readable.

import { BrowserRouter, Link } from 'react-router-dom'
import { AppRoutes } from './components/Pages.jsx'
import Bookshelf from './components/Bookshelf.jsx'

export default function App() {
  // TODO: return <BrowserRouter> wrapping an <h1>, a <nav> with <Link>s, and a
  //       <main> containing <AppRoutes /> and <Bookshelf />. Then style it.
  return null
}

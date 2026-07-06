// ───────────────────────────────────────────────────────────────────────────
// PART 10 - Routing: show a page based on the URL  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// A router swaps which component renders based on the URL, so it feels like
// separate pages while staying one app. Use react-router-dom (already
// installed).
//
// Export (named) three things (use an <h2> for the page headings - the single
// <h1> belongs to the app title in App.jsx):
//   - Home  : a component with a heading whose text is exactly  Welcome
//   - About : a component with a heading whose text is exactly  About
//   - AppRoutes : a component that defines the routes with <Routes>/<Route>:
//       path "/"      -> <Home />
//       path "/about" -> <About />
//
// AppRoutes does NOT create its own <BrowserRouter>; the app (or the test)
// provides the router around it.

import { Routes, Route } from 'react-router-dom'

export function Home() {
  // TODO: an <h2> heading "Welcome"
  return null
}

export function About() {
  // TODO: an <h2> heading "About"
  return null
}

export function AppRoutes() {
  // TODO: <Routes> with a <Route> for "/" and one for "/about"
  return null
}

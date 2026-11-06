import { Routes, Route } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Start building your collection: add books and watch the shelf grow.</p>
    </>
  )
}

export function About() {
  return (
    <>
      <h2>About</h2>
      <p>Use this app to track your books and see them appear on a virtual shelf.</p>
    </>
  )
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

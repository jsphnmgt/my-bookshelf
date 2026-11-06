import { useState } from 'react'

export default function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    if (!author.trim()) {
      setError('Author is required')
      return
    }
    onAdd({ title, author })
    setTitle('')
    setAuthor('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title<input value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Author<input value={author} onChange={e => setAuthor(e.target.value)} /></label>
      {error && <p>{error}</p>}
      <button type="submit">Add</button>
    </form>
  )
}

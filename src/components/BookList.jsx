export default function BookList({ books }) {
  if (books.length === 0) {
    return <p>No books yet</p>
  }
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title} by {book.author}</li>
      ))}
    </ul>
  )
}

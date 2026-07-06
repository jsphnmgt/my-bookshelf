// ───────────────────────────────────────────────────────────────────────────
// PART 6 - Bookshelf: state + events + lists working together  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// This is the integration piece. It owns the list of books in state and wires
// AddBookForm and BookList together.
//
// Props: { initialBooks }  - an array to start from (default to [] when absent)
//
// Render:
//   - a count in the exact form  Books: N   (N is the current number of books)
//   - <AddBookForm onAdd={...} />  - when it fires, append the new book to state
//   - <BookList books={...} />     - showing the current books
//
// Adding must be immutable: build a new array ([...books, newBook]), do not
// .push() into state. Give each added book a unique id (the array length or a
// counter is fine for this quiz).

import { useState } from 'react'
import AddBookForm from './AddBookForm.jsx'
import BookList from './BookList.jsx'

export default function Bookshelf({ initialBooks = [] }) {
  // TODO: hold books in state; add handler that appends immutably; render the
  //       count, the form, and the list.
  return null
}

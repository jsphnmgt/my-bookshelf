// ───────────────────────────────────────────────────────────────────────────
// PART 3 - BookCard: props + conditional rendering  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// Props (read-only): { title, author, finished }
//
// Render:
//   - the title inside a heading (any level, e.g. <h3>)
//   - the author somewhere as text, in the form  by <author>
//   - a status word: exactly "Finished" when finished is true,
//     otherwise exactly "Reading"
//
// Props are read-only: read them, never reassign them.

export default function BookCard({ title, author, finished }) {
  // TODO: return the card markup described above.
  return (
    <div>
      <h2>{title}</h2>
      <author>{author}</author>
    </div>
  )
}

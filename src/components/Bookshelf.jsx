import { useState, useMemo, useRef, useLayoutEffect } from 'react'
import AddBookForm from './AddBookForm.jsx'
import BookList from './BookList.jsx'
import styles from './Bookshelf.module.css'

// Earthy palette for the book spines
const SPINE_COLORS = [
  '#8B3A2A', // brick red
  '#6B4A2A', // saddle brown
  '#A65D2E', // burnt sienna
  '#3E5641', // forest green
  '#4A5568', // slate
  '#7A6030', // old gold
  '#5C3A21', // walnut
  '#C8A84B', // brass
  '#5E4B3C', // umber
  '#2E4034', // deep pine
]

// Hash a book's id into stable-looking "random" dimensions/color so the
// spine doesn't reshuffle on every re-render.
function spineStyleFor(id) {
  const seed = String(id)
    .split('')
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0)

  return {
    height: 120 + (seed % 40),   // 120–159px
    width: 22 + (seed % 14),     // 22–35px
    tilt: (seed % 7) - 3,        // -3deg to 3deg
    color: SPINE_COLORS[seed % SPINE_COLORS.length],
  }
}

function getSpineInitials(title) {
  const words = String(title || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) return '??'

  const trailingNumber = words.at(-1)?.match(/^\d+$/) ? words.at(-1) : ''
  const visibleWords = trailingNumber ? words.slice(0, -1) : words

  const initials = visibleWords
    .slice(0, 5)
    .map((word) => word.match(/[A-Za-z]/)?.[0] ?? '')
    .join('')
    .toUpperCase()

  return `${initials}${trailingNumber}`.toUpperCase() || '??'
}

export default function Bookshelf({ initialBooks = [] }) {
  const [books, setBooks] = useState(initialBooks)
  const wrapRef = useRef(null)
  const spineRefs = useRef({})
  const [wrapWidth, setWrapWidth] = useState(0)
  const [bookWidths, setBookWidths] = useState({})

  useLayoutEffect(() => {
    if (!wrapRef.current) return
    const update = (w) => setWrapWidth(w)
    const element = wrapRef.current
    const getWidth = () => Math.floor(element.getBoundingClientRect().width)

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver((entries) => {
        for (const e of entries) {
          update(Math.floor(e.contentRect.width))
        }
      })
      ro.observe(element)
      update(getWidth())
      return () => ro.disconnect()
    }

    update(getWidth())
    const handleResize = () => update(getWidth())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useLayoutEffect(() => {
    if (!books.length) return
    const widths = {}
    books.forEach((book) => {
      const el = spineRefs.current[book.id]
      if (el) {
        widths[book.id] = Math.ceil(el.getBoundingClientRect().width)
      }
    })
    if (Object.keys(widths).length > 0) {
      setBookWidths((prev) => ({ ...prev, ...widths }))
    }
  }, [books, wrapWidth])

  function handleAdd(newBook) {
    setBooks([...books, { ...newBook, id: books.length + 1 }])
  }

  const spines = useMemo(
    () => books.map((book) => ({ ...book, spine: spineStyleFor(book.id) })),
    [books]
  )

  const shelfRows = useMemo(() => {
    const rows = []
    const containerPadding = 24 // left+right padding inside .spinesRow
    const borderWidth = 6 // left+right border of .shelfRow
    const rowWidth = Math.max(200, wrapWidth - containerPadding - borderWidth)
    let currentRow = []
    let currentWidth = 0

    spines.forEach((book) => {
      const actualWidth = bookWidths[book.id] ?? book.spine.width
      const gap = currentRow.length > 0 ? 4 : 0
      const spineWidth = actualWidth + gap

      if (currentRow.length > 0 && currentWidth + spineWidth > rowWidth) {
        rows.push(currentRow)
        currentRow = []
        currentWidth = 0
      }

      currentRow.push(book)
      currentWidth += spineWidth
    })

    if (currentRow.length > 0) rows.push(currentRow)
    return rows
  }, [spines, wrapWidth, bookWidths])

  return (
    <div>
      <p>Books: {books.length}</p>
      <AddBookForm onAdd={handleAdd} />

      {/* Empty shelf that fills up with a colored spine per book */}
      <div className={styles.shelfWrap} ref={wrapRef}>
        {spines.length === 0 && (
          <p className={styles.emptyNote}>The shelf is empty. Add a book!</p>
        )}
        {shelfRows.map((row, index) => (
          <div key={`row-${index}`} className={styles.shelfRow}>
            <div className={styles.spinesRow}>
              {row.map((book) => (
                <div
                  ref={(el) => {
                    spineRefs.current[book.id] = el
                  }}
                  key={book.id}
                  className={styles.spine}
                  title={book.title}
                  style={{
                    height: `${book.spine.height}px`,
                    width: `${book.spine.width}px`,
                    backgroundColor: book.spine.color,
                    transform: `rotate(${book.spine.tilt}deg)`,
                    '--spine-height': `${book.spine.height}px`,
                  }}
                >
                  <span className={styles.spineLabel}>{getSpineInitials(book.title)}</span>
                </div>
              ))}
            </div>
            {/* Per-row base directly under this row */}
            <div className={styles.shelfBoard} />
          </div>
        ))}
      </div>

      <BookList books={books} />
    </div>
  )
}

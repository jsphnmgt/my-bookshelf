// ───────────────────────────────────────────────────────────────────────────
// PART 1 - JavaScript fundamentals  (Module 1)
// ───────────────────────────────────────────────────────────────────────────
//
// Plain JavaScript, no React. Implement each function so its tests pass. The
// examples show the expected input -> output; working out *how* is the quiz.
// You may read your own Module 1 code. Each function is independent.
//
// A "book" in this file is a plain object shaped like:
//   { id: 1, title: 'Dune', author: 'Herbert', pages: 412, finished: true }

// Return the uppercase initials of a full name.
//   initials('Ada Lovelace')      ->  'AL'
//   initials('grace murray hopper') -> 'GMH'
export function initials(fullName) {
  // TODO  (strings: split, map/loop, charAt, toUpperCase, join)
}

// Return the title in Title Case (first letter of every word capitalised, the
// rest lower-case).
//   titleCase('the great gatsby')  ->  'The Great Gatsby'
//   titleCase('WAR and PEACE')     ->  'War And Peace'
export function titleCase(title) {
  // TODO  (strings + arrays)
}

// Return true when the title is longer than `max` characters. `max` defaults to
// 20 when it is not passed.
//   isLongTitle('Dune')                              ->  false
//   isLongTitle('A Very Long Title Indeed Yes')      ->  true
//   isLongTitle('Six chars', 5)                      ->  true
export function isLongTitle(title, max = 20) {
  // TODO  (default parameter + comparison)
}

// Return the total number of pages across all books.
//   totalPages([{pages: 100}, {pages: 250}])  ->  350
//   totalPages([])                            ->  0
export function totalPages(books) {
  // TODO  (array reduce)
}

// Return an array of the titles of only the finished books, in order.
//   finishedTitles([{title:'A',finished:true},{title:'B',finished:false}]) -> ['A']
export function finishedTitles(books) {
  // TODO  (filter + map)
}

// Return the first book whose title matches exactly, or undefined if none.
//   findByTitle([{title:'Dune'}], 'Dune')   ->  {title:'Dune'}
//   findByTitle([{title:'Dune'}], 'Nope')   ->  undefined
export function findByTitle(books, title) {
  // TODO  (array find)
}

// Return the average page count, rounded to the nearest whole number. Return 0
// for an empty array (do not divide by zero).
//   averagePages([{pages:100},{pages:300}])  ->  200
//   averagePages([])                         ->  0
export function averagePages(books) {
  // TODO  (reduce + guard the empty case)
}

// Return a NEW book object with `tag` added to its `tags` array. Do not mutate
// the original book (use spread). Assume the book already has a `tags` array.
//   addTag({title:'Dune', tags:['sci-fi']}, 'classic')
//     ->  {title:'Dune', tags:['sci-fi','classic']}
export function addTag(book, tag) {
  // TODO  (object spread + array spread, immutably)
}

// Return a counter function. Each call to the returned function returns the next
// integer starting at 1. Two separate counters are independent.
//   const next = makeCounter(); next() -> 1; next() -> 2
export function makeCounter() {
  // TODO  (closure)
}

// Group the book titles by author. Return an object mapping each author to an
// array of that author's titles, in the order they appear.
//   groupByAuthor([
//     {title:'A', author:'X'}, {title:'B', author:'Y'}, {title:'C', author:'X'},
//   ])  ->  { X: ['A', 'C'], Y: ['B'] }
export function groupByAuthor(books) {
  // TODO  (reduce into an object)
}

// ───────────────────────────────────────────────────────────────────────────
// PART 2 - Classes, async, and errors  (Module 1)
// ───────────────────────────────────────────────────────────────────────────
//
// Object-oriented JavaScript plus asynchronous code and error handling. Keep
// the class names and exports exactly as written.

// A Book. The constructor stores title, author, and pages on the instance.
//   const b = new Book('Dune', 'Herbert', 412)
//   b.summary()  ->  'Dune by Herbert (412 pages)'
export class Book {
  constructor(title, author, pages) {
    // TODO  (set this.title, this.author, this.pages)
    this.title = title
    this.author = author
    this.pages = pages
  }

  summary() {
    // TODO  (return the string shown above, built from this.* )
    return `${this.title} by ${this.author} (${this.pages} pages)`
  }
}

// A RatedBook IS A Book that also has a rating (1-5). It must reuse Book's
// constructor with super(...), and its summary() must reuse Book's summary and
// append the rating.
//   const r = new RatedBook('Dune', 'Herbert', 412, 5)
//   r.summary()  ->  'Dune by Herbert (412 pages) - rated 5/5'
export class RatedBook extends Book {
  constructor(title, author, pages, rating) {
    // TODO  (call super(...) first, then set this.rating)
    super(title, author, pages)
    this.rating = rating
  }

  summary() {
    // TODO  (reuse super.summary() and append ` - rated ${rating}/5`)
    // return `super.summary(- rated ${rating}/5)`
    return (`${super.summary()} - rated ${this.rating}/5`)
  }
}

// A Shelf holds books in an array.
//   const s = new Shelf()
//   s.add(new Book('Dune', 'Herbert', 412))
//   s.size                       ->  1   (a getter, not a method)
//   s.byAuthor('Herbert')        ->  [ the Dune book ]
//   s.byAuthor('Nobody')         ->  []
export class Shelf {
  constructor() {
    // TODO  (start with an empty books array on the instance)
    this.books = []
  }

  add(book) {
    // TODO  (push the book onto the array)
    this.books.push(book)
  }

  get size() {
    // TODO  (return how many books are on the shelf)
    return this.books.length
  }

  byAuthor(author) {
    // TODO  (return an array of the books whose author matches)
    return this.books.filter(n => n.author === author)
  }
}

// Resolve to the book with the given id from the `db` object (keyed by id). If
// there is no such id, THROW an Error whose message is exactly
// `No book with id <id>`.
//   await fetchBook(1, { 1: {title:'Dune'} })  ->  {title:'Dune'}
//   await fetchBook(9, { 1: {title:'Dune'} })  ->  throws Error('No book with id 9')
export async function fetchBook(id, db) {
  // TODO  (async + throw new Error(...) when missing)
  const book = db[id]
  if (!Book) {
    throw new Error(`No Book with id ${id}`)
  } return book
}

// Try to fetch the book; if fetchBook throws, catch it and return null instead
// of letting the error propagate.
//   await safeFetch(1, { 1: {title:'Dune'} })  ->  {title:'Dune'}
//   await safeFetch(9, { 1: {title:'Dune'} })  ->  null
export async function safeFetch(id, db) {
  // TODO  (try / catch around await fetchBook)
  try {
    return await fetchBook(id, db)
  } catch {
    return null
  }
}

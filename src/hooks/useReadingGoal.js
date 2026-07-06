// ───────────────────────────────────────────────────────────────────────────
// PART 7 - useReadingGoal: a custom hook  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// A custom hook is a function whose name starts with `use` and that calls other
// hooks. This one tracks how many books you have read toward a goal.
//
//   useReadingGoal(initial = 0) returns an object: { count, addBook, reset }
//     - count    : the current number (starts at `initial`)
//     - addBook  : a function that increases count by 1
//     - reset    : a function that sets count back to 0
//
// Use useState inside. Do not render anything; a hook returns values/functions.

import { useState } from 'react'

export default function useReadingGoal(initial = 0) {
  // TODO: useState for the count; return { count, addBook, reset }.
}

// ───────────────────────────────────────────────────────────────────────────
// PART 5 - AddBookForm: controlled inputs, a form, and lifting state  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// Props: { onAdd }  - a function the parent passes in. You call it to hand the
//                     new book UP to the parent (this is "lifting state up").
//
// Build a <form> with:
//   - a controlled text input labelled  Title   (use a <label>)
//   - a controlled text input labelled  Author  (use a <label>)
//   - a submit <button> with the exact text  Add
//
// Behaviour on submit:
//   - call e.preventDefault() so the page does not reload
//   - if the title is empty (or only spaces), DO NOT call onAdd; instead show
//     the exact error text  Title is required
//   - otherwise call  onAdd({ title, author })  and then clear both inputs
//
// "Controlled" means each input's value comes from state and changes via
// onChange. Read content/m2-react Activity 4 (your own notes) if you need it.

import { useState } from 'react'

export default function AddBookForm({ onAdd }) {
  // TODO: state for title, author, and an error; the form; the submit handler.
  return null
}

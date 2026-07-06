// ───────────────────────────────────────────────────────────────────────────
// PART 9 - PageTitle: useEffect to sync with the outside world  (Module 2)
// ───────────────────────────────────────────────────────────────────────────
//
// Some work happens AFTER render and touches something outside React - here,
// the browser tab title (document.title). That is what an effect is for.
//
// Props: { title }
//
// Behaviour:
//   - after rendering, set  document.title  to the `title` prop
//   - when the `title` prop changes, update document.title again
//     (put `title` in the effect's dependency array)
//   - the component itself renders nothing visible (return null is fine)

import { useEffect } from 'react'

export default function PageTitle({ title }) {
  // TODO: useEffect that sets document.title = title, depending on [title].
  return null
}

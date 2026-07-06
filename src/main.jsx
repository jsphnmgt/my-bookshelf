import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Entry point. It mounts your <App /> into the page. You do not need to change
// this file; run `npm run dev` and edit the files in src/ instead.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

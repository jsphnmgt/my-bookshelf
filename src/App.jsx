import { BrowserRouter, Link } from 'react-router-dom'
import { AppRoutes } from './components/Pages.jsx'
import Bookshelf from './components/Bookshelf.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>My Bookshelf</h1>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main className={styles.main}>
          <div className={styles.pageSection}>
            <AppRoutes />
          </div>
          <div className={styles.pageSection}>
            <Bookshelf />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

// src/components/Footer.jsx
import { profile } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© 2026 — Built with math &amp; curiosity — {profile.domain}</p>
      </div>
    </footer>
  )
}

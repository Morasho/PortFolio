// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#about',           label: '01. About' },
  { href: '#skills',          label: '02. Skills' },
  { href: '#certifications',  label: '03. Certs' },
  { href: '#projects',        label: '04. Projects' },
  { href: '#contact',         label: '05. Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollY = window.scrollY + 120
      for (const { href } of NAV_LINKS) {
        const el = document.querySelector(href)
        if (!el) continue
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(href)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        {profile.name.split(' ')[0]}
        <span>.dev</span>
      </a>

      <button
        className={`${styles.toggle} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${active === href ? styles.linkActive : ''}`}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
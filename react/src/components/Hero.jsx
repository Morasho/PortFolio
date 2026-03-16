// src/components/Hero.jsx
import { profile } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const [first, ...rest] = profile.tagline.split('\n')

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <p className={`${styles.tag} reveal`}>{profile.role}</p>

        <h1 className={`${styles.title} reveal reveal-d1`}>
          {profile.name}<br />
          <span>{profile.tagline.split('\n').map((line, i) => (
            <span key={i}>{line}{i < profile.tagline.split('\n').length - 1 && <br />}</span>
          ))}</span>
        </h1>

        <p className={`${styles.sub} reveal reveal-d2`}>
          Undergraduate in Math &amp; CS · 1–2 years experience.<br />
          Turning abstract theory into elegant, working solutions.
        </p>

        <div className={`${styles.ctaGroup} reveal reveal-d3`}>
          <a href="#projects" className={styles.btnPrimary}>▶ View My Work</a>
          <a href="#contact"  className={styles.btnGhost}>Get In Touch</a>
          <a href={profile.resume} download className={styles.btnDownload}>⬇ Download Resume</a>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span>scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  )
}

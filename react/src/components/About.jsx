// src/components/About.jsx
import { profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <SectionHeader num="01" title="About Me" />

        <div className={styles.grid}>
          <div className={`${styles.text} reveal`}>
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className={`${styles.stats} reveal reveal-d1`}>
            {profile.stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statVal}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

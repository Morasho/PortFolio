// src/components/About.jsx
import { useState } from 'react'
import { profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './About.module.css'

// Two reliable stat card endpoints — we try the primary and fall back silently
const STATS_BASE = 'https://github-readme-stats.vercel.app/api'

function GitHubStatCard({ src, alt, fallbackSrc }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    } else {
      setFailed(true)
    }
  }

  if (failed) return null
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={styles.githubImg}
      loading="lazy"
      onError={handleError}
    />
  )
}

export default function About() {
  const githubUser = profile.contact.github
    .replace('https://github.com/', '')
    .replace(/\/$/, '')

  const theme = 'theme=transparent&title_color=7f77dd&icon_color=7f77dd&text_color=888899&border_color=2a2a40'

  const statsUrl      = `${STATS_BASE}?username=${githubUser}&show_icons=true&${theme}&count_private=true&hide_border=false`
  const langsUrl      = `${STATS_BASE}/top-langs/?username=${githubUser}&layout=compact&${theme}&hide_border=false`

  // Fallback: streak stats from a different provider
  const streakUrl     = `https://streak-stats.demolab.com?user=${githubUser}&theme=transparent&ring=7f77dd&fire=7f77dd&currStreakLabel=7f77dd&sideLabels=888899&dates=888899&border=2a2a40`

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <SectionHeader num="01" title="About Me" />

        <div className={styles.grid}>

          {/* ── Left: photo + bio ── */}
          <div className={`${styles.left} reveal`}>
            {profile.photo && (
              <div className={styles.photoWrap}>
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className={styles.photo}
                />
                <div className={styles.photoBorder} aria-hidden="true" />
              </div>
            )}
            <div className={styles.text}>
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* ── Right: stats + GitHub cards ── */}
          <div className={`${styles.right} reveal reveal-d1`}>
            <div className={styles.stats}>
              {profile.stats.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statVal}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.githubStats}>
              <p className={styles.githubLabel}>GitHub Activity</p>

              {/* Stats card — falls back to streak card if blocked */}
              <GitHubStatCard
                src={statsUrl}
                alt="GitHub stats"
                fallbackSrc={streakUrl}
              />

              {/* Top languages card — hidden if blocked */}
              <GitHubStatCard
                src={langsUrl}
                alt="Top languages"
                fallbackSrc={null}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// src/components/Projects.jsx
import { useRef, useState, useEffect } from 'react'
import { projects } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Projects.module.css'

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
)

// ── Video Modal ────────────────────────────────────────────────
function VideoModal({ src, title, onClose }) {
  const videoRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Pause & reset when closing
  const handleClose = () => {
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
    onClose()
  }

  return (
    <div className={styles.modalBackdrop} onClick={handleClose} aria-modal="true" role="dialog">
      <div className={styles.modalBox} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>{title} — Demo</span>
          <button className={styles.modalClose} onClick={handleClose} aria-label="Close video">
            ✕
          </button>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          className={styles.modalVideo}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  )
}

// ── Image panel ────────────────────────────────────────────────
function ImagePanel({ src, title }) {
  return (
    <div className={styles.imgWrap}>
      <img src={src} alt={`${title} screenshot`} className={styles.img} loading="lazy" />
      <div className={styles.imgOverlay} aria-hidden="true" />
    </div>
  )
}

// ── Placeholder ────────────────────────────────────────────────
function PlaceholderPanel({ title }) {
  const abbr = title.replace(/[^A-Za-z ]/g, '').split(' ').map(w => w[0]).filter(Boolean).join('')
  return (
    <div className={styles.imgPlaceholder} aria-hidden="true">
      <span className={styles.placeholderText}>{`<${abbr} />`}</span>
    </div>
  )
}

// ── Project card ───────────────────────────────────────────────
function ProjectCard({ num, title, desc, tags, video, image, githubHref, liveHref, delay }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <article className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>

        {/* Media panel — image or placeholder (no inline video) */}
        {image
          ? <ImagePanel src={image} title={title} />
          : <PlaceholderPanel title={title} />
        }

        <div className={styles.body}>
          <span className={styles.num}>{num}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>

          <ul className={styles.tags}>
            {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>

          <div className={styles.links}>
            {/* Play Demo button — only if a video is provided */}
            {video && (
              <button
                className={`${styles.linkBtn} ${styles.linkBtnDemo}`}
                onClick={() => setModalOpen(true)}
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <circle cx="6" cy="6" r="6" fill="currentColor" opacity="0.2"/>
                  <polygon points="4.5,3 9.5,6 4.5,9" fill="currentColor"/>
                </svg>
                Play Demo
              </button>
            )}

            {githubHref && (
              <a href={githubHref} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                <GitHubIcon /> GitHub
              </a>
            )}
            {liveHref && (
              <a href={liveHref} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkBtnLive}`}>
                ↗ Live Demo
              </a>
            )}
          </div>
        </div>

        <a
          href={githubHref || liveHref || '#'}
          className={styles.arrow}
          aria-label={`View ${title}`}
          target="_blank"
          rel="noopener noreferrer"
        >↗</a>

      </article>

      {/* Modal — rendered outside card so it overlays the whole page */}
      {modalOpen && (
        <VideoModal
          src={video}
          title={title}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <SectionHeader num="03" title="Projects" />
        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectCard key={project.num} {...project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

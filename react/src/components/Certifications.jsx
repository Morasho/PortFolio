// src/components/Certifications.jsx
import { useState } from 'react'
import { certifications } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Certifications.module.css'

function CertCard({ title, issuer, date, desc, icon, file, fileType, delay }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.cardTop}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.meta}>
          <span className={styles.issuer}>{issuer}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <span className={styles.badge}>Certified</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>

      {/* Action buttons */}
      <div className={styles.actions}>
        <button
          className={styles.previewBtn}
          onClick={() => setExpanded(e => !e)}
        >
          {expanded ? '▲ Hide Certificate' : '▼ View Certificate'}
        </button>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.openBtn}
        >
          ↗ Open
        </a>
      </div>

      {/* Inline preview */}
      {expanded && (
        <div className={styles.preview}>
          {fileType === 'image' ? (
            <img
              src={file}
              alt={`${title} certificate`}
              className={styles.previewImg}
            />
          ) : (
            <iframe
              src={file}
              title={`${title} certificate`}
              className={styles.previewPdf}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.container}>
        <SectionHeader num="03" title="Certifications" />
        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} {...cert} delay={(i % 2) * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
// src/components/Skills.jsx
import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Skills.module.css'

function SkillCard({ icon, name, sub, level, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { bar.style.width = level + '%' }, 100)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(bar)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.sub}>{sub}</div>
      <div className={styles.barBg}>
        <div ref={barRef} className={styles.barFill} style={{ width: 0 }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <SectionHeader num="02" title="Skills" />
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} delay={(i % 3) * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

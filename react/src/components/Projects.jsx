// src/components/Projects.jsx
import { projects } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Projects.module.css'

function ProjectCard({ num, title, desc, tags, href, delay }) {
  return (
    <article className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.body}>
        <span className={styles.num}>{num}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <ul className={styles.tags}>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <a href={href} className={styles.arrow} aria-label={`View ${title}`}>↗</a>
    </article>
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

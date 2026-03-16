// src/components/Contact.jsx
import { profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

export default function Contact() {
  const { email, phone, github, linkedin } = profile.contact

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <SectionHeader num="04" title="Contact" />
        <div className={`${styles.card} reveal`}>
          <h3 className={styles.title}>Let's Build Something.</h3>
          <p className={styles.sub}>
            Open to internships, research, and collaboration. Reach out!
          </p>
          <div className={styles.links}>
            <a href={`mailto:${email}`} className={styles.btn}>✉ Email</a>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.btn}>📞 {phone}</a>
            <a href={github}   target="_blank" rel="noopener noreferrer" className={styles.btn}>⌥ GitHub</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.btn}>⬡ LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

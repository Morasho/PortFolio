// src/components/SectionHeader.jsx
import styles from './SectionHeader.module.css'

export default function SectionHeader({ num, title }) {
  return (
    <div className={`${styles.header} reveal`}>
      <span className={styles.num}>{num} /</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  )
}

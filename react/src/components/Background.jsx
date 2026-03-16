// src/components/Background.jsx
import styles from './Background.module.css'

export default function Background() {
  return (
    <>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.blob} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
    </>
  )
}

// src/components/Contact.jsx
import { useState, useRef } from 'react'
import { profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

// ── EmailJS Setup ────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up free
// 2. Add a Service → connect your Gmail → copy the Service ID
// 3. Create an Email Template with these variables:
//      {{from_name}}  {{from_email}}  {{subject}}  {{message}}
//    Set "To Email" in the template to: moraravictor9@gmail.com
// 4. Account → API Keys → copy your Public Key
// Replace the three values below:
const EMAILJS_SERVICE_ID  = 'service_s9sgbbn'
const EMAILJS_TEMPLATE_ID = 'template_kwbujnc'
const EMAILJS_PUBLIC_KEY  = 'eBWcxROnVnEATIbfO'
// ────────────────────────────────────────────────────────────

const INITIAL = { from_name: '', from_email: '', subject: '', message: '' }

export default function Contact() {
  const { email, phone, github, linkedin } = profile.contact
  const formRef = useRef(null)

  const [fields, setFields]   = useState(INITIAL)
  const [status, setStatus]   = useState('idle')
  const [touched, setTouched] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (status === 'error') setStatus('idle')
  }

  const handleBlur = e => {
    setTouched(t => ({ ...t, [e.target.name]: true }))
  }

  const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const errors = {
    from_name:  !fields.from_name.trim()          ? 'Name is required'        : '',
    from_email: !isValidEmail(fields.from_email)  ? 'Valid email is required' : '',
    subject:    !fields.subject.trim()            ? 'Subject is required'     : '',
    message:    fields.message.trim().length < 10 ? 'Message too short'       : '',
  }

  const isValid = Object.values(errors).every(e => !e)

  const handleSubmit = async e => {
    e.preventDefault()
    setTouched({ from_name: true, from_email: true, subject: true, message: true })
    if (!isValid) return

    setStatus('sending')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields(INITIAL)
      setTouched({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <SectionHeader num="04" title="Contact" />

        <div className={`${styles.wrapper} reveal`}>

          {/* Left: info + links */}
          <div className={styles.info}>
            <h3 className={styles.title}>Let's Build Something.</h3>
            <p className={styles.sub}>
              Open to internships, research collaborations, and cool projects.
              Drop a message or reach out directly.
            </p>
            <div className={styles.links}>
              <a href={`mailto:${email}`} className={styles.link}>
                <span className={styles.linkIcon}>✉</span>
                <span>{email}</span>
              </a>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.link}>
                <span className={styles.linkIcon}>☏</span>
                <span>{phone}</span>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>⌥</span>
                <span>GitHub</span>
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>⬡</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="from_name"
                  type="text"
                  className={`${styles.input} ${touched.from_name && errors.from_name ? styles.hasError : ''}`}
                  placeholder="Your name"
                  value={fields.from_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                />
                {touched.from_name && errors.from_name && (
                  <span className={styles.errMsg}>{errors.from_name}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="from_email"
                  type="email"
                  className={`${styles.input} ${touched.from_email && errors.from_email ? styles.hasError : ''}`}
                  placeholder="you@example.com"
                  value={fields.from_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                />
                {touched.from_email && errors.from_email && (
                  <span className={styles.errMsg}>{errors.from_email}</span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                name="subject"
                type="text"
                className={`${styles.input} ${touched.subject && errors.subject ? styles.hasError : ''}`}
                placeholder="Internship / Collaboration / Just saying hi"
                value={fields.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.subject && errors.subject && (
                <span className={styles.errMsg}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                className={`${styles.textarea} ${touched.message && errors.message ? styles.hasError : ''}`}
                placeholder="Tell me about your project or opportunity..."
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.message && errors.message && (
                <span className={styles.errMsg}>{errors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? '⟳  Sending...' : '▶  Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>✓ Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>✗ Something went wrong. Please try emailing me directly.</p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}

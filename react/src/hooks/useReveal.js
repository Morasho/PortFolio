// src/hooks/useReveal.js
// Attaches IntersectionObserver to add .visible to .reveal elements inside a ref

import { useEffect } from 'react'

export function useReveal(ref) {
  useEffect(() => {
    const container = ref?.current ?? document
    const elements = container.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

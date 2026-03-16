// src/App.jsx
import { useRef } from 'react'
import { useReveal } from './hooks/useReveal'
import Background from './components/Background'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const mainRef = useRef(null)
  useReveal(mainRef)

  return (
    <>
      <Background />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { DATA } from '../data.js'

const links = [
  { href: '#work',           label: 'Work' },
  { href: '#experience',     label: 'Experience' },
  { href: '#skills',         label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleHire = (e) => {
    e.preventDefault()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${DATA.email}&su=Hiring%20Opportunity%20for%20Ayush%20Nema`
    const newTab = window.open(gmailUrl, '_blank')
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      navigator.clipboard.writeText(DATA.email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white/92 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>

      {/* Main bar */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 md:px-13
                      h-[56px] sm:h-[60px] flex items-center gap-4 sm:gap-8">

        {/* Logo */}
        <a href="#" onClick={e => go(e, '#home')}
          className="text-[14px] sm:text-[15px] font-semibold text-ink
                     tracking-tight no-underline shrink-0">
          {DATA.name}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex list-none gap-0.5 ml-auto">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => go(e, l.href)}
                className="text-[13px] text-muted no-underline px-3 py-1.5 rounded-lg
                           transition-all duration-150 hover:text-ink hover:bg-bg2">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me — desktop */}
        <button
          onClick={handleHire}
          className="hidden md:inline-flex items-center hbtn hbtn-fill
                     text-[13px] shrink-0 border-none cursor-pointer whitespace-nowrap">
          {copied ? '✓ Copied!' : 'Hire Me'}
        </button>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden ml-auto flex flex-col justify-center gap-[5px]
                     w-8 h-8 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300
            ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300
            ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                       bg-white border-b border-border shadow-md
                       ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              className="text-[15px] text-muted px-4 py-3 rounded-xl
                         hover:bg-bg2 hover:text-ink no-underline
                         transition-colors duration-150">
              {l.label}
            </a>
          ))}
          <button
            onClick={handleHire}
            className="hbtn hbtn-fill mt-2 justify-center border-none cursor-pointer w-full">
            {copied ? '✓ Email Copied!' : 'Hire Me'}
          </button>
        </div>
      </div>

    </nav>
  )
}
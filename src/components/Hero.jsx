import { useState, useEffect } from 'react'
import { DATA } from '../data.js'

const GREETINGS = [
  "Hi, I'm Ayush 👋",
  "नमस्ते, मैं आयुष हूं 🙏",
  "Hello, I'm Ayush 💻",
  "Hey there! I'm Ayush 🚀",
]

export default function Hero() {
  const [copied, setCopied]       = useState(false)
  const [greetIdx, setGreetIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

  useEffect(() => {
    const current = GREETINGS[greetIdx]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setGreetIdx(i => (i + 1) % GREETINGS.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, greetIdx])

  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  const handleEmail = (e) => {
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
    <section id="home"
      className="max-w-[1100px] mx-auto px-4 sm:px-8 md:px-13 pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-20">

      {/* Available badge */}
      <div className="inline-flex items-center gap-2 bg-green-bg border border-green-border
                      rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5
                      text-[11px] sm:text-xs font-medium text-green mb-5 sm:mb-6">
        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green animate-pulse-dot" />
        Available for opportunities
      </div>

      {/* Typing greeting */}
      <div className="h-[36px] sm:h-[44px] flex items-center mb-2 sm:mb-3">
        <span className="text-[22px] sm:text-[28px] font-semibold text-ink tracking-tight">
          {displayed}
          <span className="inline-block w-[2px] h-[22px] sm:h-[28px] bg-ink ml-0.5
                           align-middle animate-blink" />
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[clamp(26px,5vw,48px)] font-medium leading-tight
                     tracking-[-1px] sm:tracking-[-1.5px]
                     text-ink max-w-[720px] mb-3 sm:mb-4">
        {DATA.tagline}
      </h1>

      {/* Subtext */}
      <p className="text-[14px] sm:text-[16px] text-muted
                    max-w-[540px] leading-[1.7] sm:leading-[1.75] mb-7 sm:mb-8">
        {DATA.about}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-12">

        {/* Resume — black filled, FIRST */}
        <a href="/RESUME_AYUSH_NEMA.pdf" download="Ayush_Nema_Resume.pdf"
          className="hbtn hbtn-fill text-[13px] sm:text-[14px] inline-flex items-center gap-2">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v13m0 0l-4-4m4 4l4-4M3 21h18" />
          </svg>
          Download Resume
        </a>

        {/* Email — Gmail opens directly */}
        <button onClick={handleEmail}
          className="hbtn border-none cursor-pointer text-[13px] sm:text-[14px]">
          {copied ? '✓ Copied!' : 'Email'}
        </button>

        {/* LinkedIn */}
        <a href={DATA.linkedin} target="_blank" rel="noreferrer"
          className="hbtn text-[13px] sm:text-[14px]">
          LinkedIn
        </a>

        {/* GitHub */}
        <a href={DATA.github} target="_blank" rel="noreferrer"
          className="hbtn text-[13px] sm:text-[14px]">
          GitHub
        </a>

      </div>

      {/* Scroll hint */}
      <button
        onClick={() => go('#work')}
        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs
                   text-pale bg-transparent border-none cursor-pointer
                   tracking-wide hover:text-soft transition-colors">
        scroll down
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>

    </section>
  )
}
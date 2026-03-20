import { useState } from 'react'
import { DATA } from '../data.js'

export default function Hero() {
  const [copied, setCopied] = useState(false)

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
        <button
          onClick={handleEmail}
          className="hbtn hbtn-fill border-none cursor-pointer text-[13px] sm:text-[14px]">
          {copied ? '✓ Email Copied!' : 'Email'}
        </button>
        <a href={DATA.linkedin} target="_blank" rel="noreferrer"
          className="hbtn text-[13px] sm:text-[14px]">
          LinkedIn
        </a>
        <a href="/RESUME_AYUSH_NEMA.pdf" download
          className="hbtn text-[13px] sm:text-[14px]">
          Resume ↓
        </a>
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
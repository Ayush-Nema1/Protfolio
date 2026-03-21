import { useState } from 'react'
import { DATA } from '../data.js'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleEmail = (e) => {
    e.preventDefault()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${DATA.email}&su=Hiring%20Opportunity%20for%20Ayush%20Nema`
    const newTab = window.open(gmailUrl, '_blank')
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      navigator.clipboard.writeText(DATA.email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <footer className="bg-white border-t border-border">

      {/* Quote strip */}
      <div className="border-b border-border py-4 px-4 sm:px-8 md:px-13">
        <div className="sec-inner text-center">
          <p className="text-[12px] sm:text-[13px] text-gray-400 italic">
            "Whether you think you can, or you think you can't — you're right."
            <span className="not-italic font-medium text-gray-400 ml-1.5">— Henry Ford</span>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 sm:py-6 px-4 sm:px-8 md:px-13">
        <div className="sec-inner flex flex-col sm:flex-row items-center
                        justify-between gap-3 sm:gap-4 text-center sm:text-left">

          <span className="text-[12px] text-pale order-2 sm:order-1">
            © 2026 {DATA.name}
          </span>

          <div className="flex gap-5 order-1 sm:order-2">
            <a href={DATA.github} target="_blank" rel="noreferrer"
              className="text-[12px] text-pale no-underline transition-colors hover:text-ink">
              GitHub
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer"
              className="text-[12px] text-pale no-underline transition-colors hover:text-ink">
              LinkedIn
            </a>
            <button onClick={handleEmail}
              className="text-[12px] bg-transparent border-none cursor-pointer
                         font-[inherit] text-pale transition-colors hover:text-ink">
              {copied ? '✓ Copied!' : 'Email'}
            </button>
          </div>

          <span className="hidden sm:inline text-[12px] text-pale order-3">
            React · Vite · Tailwind CSS
          </span>

        </div>
      </div>

    </footer>
  )
}

import { useState } from 'react'
import { DATA } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleSendEmail = (e) => {
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

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.email).then(() => {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="bg-bg2 py-16 sm:py-20 px-4 sm:px-8 md:px-13">
      <div className="sec-inner">
        <div className="border border-border rounded-[20px] sm:rounded-[24px]
                        p-8 sm:p-12 md:p-16 text-center
                        bg-white max-w-[700px] mx-auto">

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px]
                         font-semibold text-ink tracking-tight mb-3">
            Let's Work Together
          </h2>

          <p className="text-[14px] sm:text-[15px] text-muted
                        max-w-[420px] mx-auto leading-[1.7] mb-8 sm:mb-9">
            Open to internships, full-time roles, and freelance projects.
            Always happy to connect and talk code.
          </p>

          {/* Action buttons */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-7">
            <button
              onClick={handleSendEmail}
              className="hbtn hbtn-fill border-none cursor-pointer text-[13px] sm:text-[14px]">
              {copied ? '✓ Email Copied!' : 'Send Email ↗'}
            </button>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer"
              className="hbtn text-[13px] sm:text-[14px]">
              LinkedIn
            </a>
            <a href={DATA.github} target="_blank" rel="noreferrer"
              className="hbtn text-[13px] sm:text-[14px]">
              GitHub
            </a>
            <a href="/RESUME_AYUSH_NEMA.pdf" download
              className="hbtn text-[13px] sm:text-[14px]">
              Resume ↓
            </a>
          </div>

          {/* Info row — stacks on very small screens */}
          <div className="flex flex-col sm:flex-row items-center justify-center
                          flex-wrap gap-1.5 sm:gap-2.5 text-[12px] sm:text-[13px] text-soft">
            <button
              onClick={copyEmail}
              className="border-none bg-transparent cursor-pointer font-[inherit]
                         text-soft text-[12px] sm:text-[13px] transition-colors
                         hover:text-ink border-b border-transparent hover:border-ink pb-px">
              {emailCopied ? '✓ Copied!' : DATA.email}
            </button>
            <span className="hidden sm:inline text-border2">·</span>
            <span>{DATA.phone}</span>
            <span className="hidden sm:inline text-border2">·</span>
            <span>{DATA.location}</span>
          </div>

        </div>
      </div>
    </section>
  )
}
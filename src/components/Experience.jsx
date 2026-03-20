import { DATA } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="bg-bg2 py-16 sm:py-20 px-4 sm:px-8 md:px-13">
      <div className="sec-inner">
        <p className="sec-eyebrow">Work Experience</p>
        <h2 className="sec-heading">Where I've Worked</h2>

        {DATA.experience.map(exp => (
          <div key={exp.id}
            className="bg-white border border-border rounded-[18px] sm:rounded-[20px]
                       overflow-hidden transition-shadow duration-200 hover:shadow-md">

            {/* Header */}
            <div className="flex flex-col sm:grid sm:grid-cols-[auto_1fr_auto]
                            gap-3 sm:gap-4 items-start sm:items-center
                            p-4 sm:p-6 border-b border-gray-50">

              {/* Top row on mobile: logo + badges */}
              <div className="flex items-center justify-between w-full sm:contents">

                {/* Logo */}
                <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px]
                                rounded-[12px] sm:rounded-[14px] shrink-0
                                bg-gradient-to-br from-[#e0fdf4] to-[#ccfbf1]
                                border border-[#a7f3d0]
                                flex items-center justify-center
                                text-[12px] sm:text-[13px] font-extrabold text-[#059669]">
                  TW
                </div>

                {/* Badges — mobile only (top-right) */}
                <div className="flex flex-col items-end gap-1.5 sm:hidden">
                  <span className="bg-bg3 border border-border rounded-full px-3 py-0.5
                                   text-[11px] text-soft font-medium whitespace-nowrap">
                    {exp.duration}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5
                                     bg-green-bg border border-green-border
                                     rounded-full px-3 py-0.5
                                     text-[11px] text-green font-medium whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink" />
                      Active
                    </span>
                  )}
                </div>
              </div>

              {/* Role + meta */}
              <div className="w-full sm:w-auto">
                <div className="text-[15px] sm:text-[17px] font-semibold text-ink
                                tracking-tight mb-1">
                  {exp.role}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2
                                text-[12px] sm:text-[13px] text-muted">
                  <span className="font-semibold text-[#059669]">{exp.company}</span>
                  <span className="text-border2">·</span>
                  <span>{exp.type}</span>
                  <span className="text-border2">·</span>
                  <span>{exp.mode}</span>
                  <span className="hidden sm:inline text-border2">·</span>
                  <span className="hidden sm:inline">{exp.location}</span>
                </div>
                {/* Location on own line on mobile */}
                <div className="sm:hidden text-[11px] text-muted mt-0.5 flex items-center gap-1">
                  <svg width="11" height="11" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {exp.location}
                </div>
              </div>

              {/* Right badges — desktop only */}
              <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                <span className="bg-bg3 border border-border rounded-full px-4 py-1
                                 text-xs text-soft font-medium whitespace-nowrap">
                  {exp.duration} · {exp.period}
                </span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5
                                   bg-green-bg border border-green-border
                                   rounded-full px-3.5 py-1
                                   text-xs text-green font-medium whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink" />
                    Currently Here
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              <p className="text-[13px] sm:text-[14px] text-gray-500
                            leading-[1.8] max-w-[580px] mb-4 sm:mb-5">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.skills.map(s => (
                  <span key={s}
                    className="text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5
                               rounded-lg bg-bg3 border border-border
                               text-gray-500 font-medium cursor-default
                               transition-all duration-150
                               hover:bg-ink hover:text-white hover:border-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
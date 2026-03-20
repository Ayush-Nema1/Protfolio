import { useState } from 'react'
import { DATA } from '../data.js'

export default function Certifications() {
  const [modal, setModal] = useState(null)

  return (
    <section id="certifications" className="bg-bg2 py-20 px-4 sm:px-8 md:px-13">
      <div className="sec-inner">
        <p className="sec-eyebrow">Certifications</p>
        <h2 className="sec-heading">Courses &amp; Achievements</h2>

        {/* Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA.certifications.map(cert => (
            <div
              key={cert.id}
              className="bg-white border border-border rounded-[18px] overflow-hidden
                         cursor-pointer group transition-all duration-200
                         hover:-translate-y-1 hover:shadow-xl hover:border-gray-300
                         relative flex flex-col"
              onClick={() => cert.image && setModal(cert)}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px]"
                style={{ background: cert.accent }}
              />

              {/* Image / Placeholder */}
              <div className="h-[160px] sm:h-[180px] overflow-hidden relative bg-bg2 shrink-0">
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover object-top
                                 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0
                                    group-hover:opacity-100 transition-opacity duration-200
                                    flex items-center justify-center">
                      <span className="bg-white text-ink text-[13px] font-semibold
                                       px-4 py-2 rounded-full shadow-sm">
                        View Certificate ↗
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3 p-6"
                    style={{ background: `${cert.accent}10` }}
                  >
                    <div className="text-4xl sm:text-5xl">🎓</div>
                    <div className="text-[13px] font-semibold text-gray-500 text-center leading-snug">
                      {cert.issuer}
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <div
                  className="text-[10px] font-semibold tracking-wide uppercase mb-1.5 truncate"
                  style={{ color: cert.accent }}
                >
                  {cert.issuer}
                </div>
                <div className="text-[13px] sm:text-[14px] font-semibold text-ink leading-snug mb-2">
                  {cert.name}
                </div>
                <p className="text-[12px] text-muted leading-relaxed mb-3 line-clamp-2 flex-1">
                  {cert.desc}
                </p>
                <div className="flex items-center justify-between mt-auto flex-wrap gap-2">
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: cert.badgeBg, color: cert.badgeColor }}
                  >
                    ✓ Completed
                  </span>
                  <span className="text-[11px] text-pale">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — fully responsive */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-5
                      bg-black/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-[20px] w-full max-w-[95vw] sm:max-w-[700px]
                        overflow-hidden shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full
                         bg-black/10 border-none flex items-center justify-center
                         text-[13px] text-gray-500 cursor-pointer hover:bg-black/20
                         transition-colors"
            >
              ✕
            </button>
            <img
              src={modal.image}
              alt={modal.name}
              className="w-full max-h-[50vh] sm:max-h-[420px] object-contain"
            />
            <div className="p-4 sm:p-5 border-t border-border">
              <div
                className="text-[10px] font-semibold tracking-wide uppercase mb-1"
                style={{ color: modal.accent }}
              >
                {modal.issuer}
              </div>
              <div className="text-[15px] sm:text-[16px] font-semibold text-ink mb-1 leading-snug">
                {modal.name}
              </div>
              {modal.certId && (
                <div className="text-[11px] font-mono text-gray-400 mb-1">
                  Certificate ID: {modal.certId}
                </div>
              )}
              <div className="text-[12px] text-muted">{modal.date}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
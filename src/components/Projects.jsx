import { DATA } from '../data.js'

function SocialMock() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-bold text-[#818cf8]">ConnectApp</span>
        <div className="flex gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full border border-[rgba(129,140,248,0.3)]
                           text-[#818cf8] bg-[rgba(129,140,248,0.08)]">Login</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full border border-[rgba(129,140,248,0.4)]
                           text-[#818cf8] bg-[rgba(129,140,248,0.15)]">Sign Up</span>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                      rounded-xl p-2.5 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#818cf8] to-[#c084fc] shrink-0" />
          <span className="text-[9px] text-[#94a3b8] font-medium">Ayush Nema · Just now</span>
        </div>
        <p className="text-[10px] text-[#e2e8f0] leading-relaxed mb-1.5">
          Just shipped PDF resume generation — users can now export their profile as a PDF directly from the dashboard 🚀
        </p>
        <div className="flex gap-3 text-[9px] text-[#475569]">
          <span>♡ 24 likes</span><span>💬 6 comments</span><span>↗ Share</span>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                      rounded-xl p-2.5">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f472b6] to-[#fb923c] shrink-0" />
          <span className="text-[9px] text-[#94a3b8]">Recruiter · 5 minutes ago</span>
        </div>
        <p className="text-[10px] text-[#e2e8f0]">Impressive work on the dashboard update! Really clean UI.</p>
      </div>
    </div>
  )
}

function GitHubCard({ proj }) {
  return (
    <a href={proj.github} target="_blank" rel="noreferrer"
      className="border border-dashed border-gray-200 rounded-[18px] overflow-hidden
                 bg-white transition-all duration-200 hover:-translate-y-1
                 hover:shadow-lg hover:border-ink cursor-pointer group no-underline flex flex-col">

      <div className="h-[180px] sm:h-[220px] flex flex-col items-center justify-center gap-3 sm:gap-4
                      bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-ink
                        flex items-center justify-center
                        transition-transform duration-200 group-hover:scale-110">
          <svg width="26" height="26" fill="white" viewBox="0 0 24 24"
            className="sm:w-8 sm:h-8">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
              0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
              -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
              .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
              -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
              c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
              .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
              0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </div>
        <div className="text-center px-4 sm:px-6">
          <div className="text-[14px] sm:text-[15px] font-semibold text-ink mb-0.5 group-hover:underline">
            Ayush Nema
          </div>
          <div className="text-[11px] sm:text-[12px] text-gray-400 truncate max-w-[200px]">
            github.com/Ayush-Nema1
          </div>
        </div>
      </div>

      <div className="p-3.5 sm:p-4 border-t border-gray-50 flex justify-between items-start gap-2">
        <div className="min-w-0">
          <div className="text-[13px] sm:text-[14px] font-semibold text-ink mb-1">
            More Projects on GitHub →
          </div>
          <p className="text-[11px] sm:text-[12px] text-muted leading-[1.55] line-clamp-2">
            {proj.desc}
          </p>
        </div>
        <span className="text-[15px] sm:text-[16px] text-gray-300 shrink-0 pt-0.5
                         group-hover:text-ink transition-colors">↗</span>
      </div>
    </a>
  )
}

function ProjectCard({ proj }) {
  if (proj.githubCard) return <GitHubCard proj={proj} />

  return (
    <div className="border border-border rounded-[18px] overflow-hidden bg-white
                    transition-all duration-200 hover:-translate-y-1 hover:shadow-xl
                    hover:border-gray-300 cursor-pointer group relative">

      {proj.featured && (
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10
                        flex items-center gap-1
                        bg-ink text-white text-[9px] sm:text-[10px] font-semibold
                        px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full tracking-wide shadow-md">
          ★ Featured
        </div>
      )}

      <div className="h-[180px] sm:h-[220px] overflow-hidden relative bg-bg2">
        {proj.image ? (
          <img src={proj.image} alt={proj.title}
            className="w-full h-full object-cover object-top
                       transition-transform duration-300 group-hover:scale-[1.03]" />
        ) : (
          <SocialMock />
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                        transition-opacity duration-200 flex items-center justify-center gap-2">
          {proj.live && proj.live !== '#' && (
            <a href={proj.live} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full
                         text-[12px] sm:text-[13px] font-semibold
                         bg-white text-ink no-underline hover:bg-gray-100 transition-colors">
              Live ↗
            </a>
          )}
          {proj.github && (
            <a href={proj.github} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full
                         text-[12px] sm:text-[13px] font-semibold
                         bg-transparent text-white border border-white/60
                         no-underline hover:bg-white/10 transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="p-3.5 sm:p-4 border-t border-gray-50 flex justify-between items-start gap-2">
        <div className="min-w-0">
          <div className="text-[13px] sm:text-[14px] font-semibold text-ink mb-1 truncate">
            {proj.title}
          </div>

          {/* ✅ ONLY CHANGE HERE */}
          <p className="text-[11px] sm:text-[12px] text-muted leading-[1.55] mb-2 sm:mb-2.5 
                        line-clamp-3 sm:line-clamp-2 
                        group-hover:line-clamp-none transition-all duration-200">
            {proj.desc}
          </p>

          <div className="flex gap-1 sm:gap-1.5 flex-wrap">
            {proj.tags.slice(0, 4).map(t => (
              <span key={t} className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5
                                       rounded-full bg-bg3 text-gray-500">
                {t}
              </span>
            ))}
            {proj.tags.length > 4 && (
              <span className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5
                               rounded-full bg-bg3 text-gray-400">
                +{proj.tags.length - 4}
              </span>
            )}
          </div>
        </div>
        <span className="text-[15px] sm:text-[16px] text-gray-300 shrink-0 pt-0.5
                         group-hover:text-ink transition-colors">↗</span>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="px-4 sm:px-8 md:px-13 pb-16 sm:pb-20">
      <div className="sec-inner">
        <p className="sec-eyebrow">Selected Work</p>
        <h2 className="sec-heading">Projects I've Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {DATA.projects.map(p => <ProjectCard key={p.id} proj={p} />)}
        </div>
      </div>
    </section>
  )
}}

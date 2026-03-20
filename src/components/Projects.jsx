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
        <p className="text-[10px] text-[#e2e8f0]">
          Impressive work on the dashboard update! Really clean UI.
        </p>
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
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..."/>
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
        <div className="absolute top-3 left-3 bg-ink text-white text-[10px]
                        px-2 py-1 rounded-full">
          ★ Featured
        </div>
      )}

      <div className="h-[180px] sm:h-[220px] overflow-hidden relative bg-bg2">
        {proj.image ? (
          <img src={proj.image} alt={proj.title}
            className="w-full h-full object-cover object-top" />
        ) : (
          <SocialMock />
        )}
      </div>

      <div className="p-3.5 sm:p-4">
        <div className="text-[13px] sm:text-[14px] font-semibold text-ink mb-1">
          {proj.title}
        </div>

        {/* ✅ FIXED LINE CLAMP ONLY */}
        <p className="text-[11px] sm:text-[12px] text-muted mb-2
                      line-clamp-3 sm:line-clamp-2
                      group-hover:line-clamp-none">
          {proj.desc}
        </p>

        <div className="flex gap-1 flex-wrap">
          {proj.tags.slice(0, 4).map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-gray-100 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="px-4 sm:px-8 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.projects.map(p => (
          <ProjectCard key={p.id} proj={p} />
        ))}
      </div>
    </section>
  )
}

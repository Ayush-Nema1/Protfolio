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
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#818cf8] to-[#c084fc]" />
          <span className="text-[9px] text-[#94a3b8] font-medium">Ayush Nema · Just now</span>
        </div>
        <p className="text-[10px] text-[#e2e8f0] mb-1.5">
          Just shipped PDF resume generation — users can now export their profile as a PDF 🚀
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
                 hover:shadow-lg hover:border-ink group flex flex-col">

      <div className="h-[200px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-[14px] font-semibold">Ayush Nema</div>
          <div className="text-[12px] text-gray-400">github.com/Ayush-Nema1</div>
        </div>
      </div>

      <div className="p-4">
        <div className="font-semibold text-[14px] mb-1">More Projects →</div>

        <p className="text-[12px] text-gray-500 line-clamp-2">
          {proj.desc}
        </p>
      </div>
    </a>
  )
}

function ProjectCard({ proj }) {
  if (proj.githubCard) return <GitHubCard proj={proj} />

  return (
    <div className="border rounded-[18px] overflow-hidden bg-white
                    transition-all duration-200 hover:-translate-y-1 hover:shadow-xl
                    cursor-pointer group relative">

      {proj.featured && (
        <div className="absolute top-3 left-3 bg-black text-white text-[10px]
                        px-2 py-1 rounded-full">
          ★ Featured
        </div>
      )}

      <div className="h-[200px] overflow-hidden">
        {proj.image ? (
          <img src={proj.image} alt={proj.title}
            className="w-full h-full object-cover" />
        ) : (
          <SocialMock />
        )}
      </div>

      <div className="p-4">
        <div className="font-semibold text-[14px] mb-1">
          {proj.title}
        </div>

        {/* ✅ FIXED LINE CLAMP */}
        <p className="text-[12px] text-gray-500 mb-2 
                      line-clamp-3 sm:line-clamp-2 
                      group-hover:line-clamp-none transition-all duration-200">
          {proj.desc}
        </p>

        <div className="flex flex-wrap gap-1">
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
    <section className="px-4 py-10">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.projects.map(p => (
          <ProjectCard key={p.id} proj={p} />
        ))}
      </div>
    </section>
  )
}

import { DATA } from '../data.js'

function SkillPill({ skill }) {
  return (
    <div className="skill-pill">
      <div className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]
                      rounded-[6px] sm:rounded-[7px] bg-gray-100
                      flex items-center justify-center overflow-hidden shrink-0">
        {skill.src ? (
          <img
            src={skill.src}
            alt={skill.name}
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentNode.textContent = skill.name[0]
            }}
          />
        ) : (
          <span className="text-[13px] sm:text-[15px] leading-none">
            {skill.emoji || skill.name[0]}
          </span>
        )}
      </div>
      <span className="text-[12px] sm:text-[13px] font-medium text-gray-800 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-13">
      <div className="sec-inner">
        <p className="sec-eyebrow">Tech Stack</p>
        <h2 className="sec-heading">Skills &amp; Technologies</h2>

        <div className="flex flex-col gap-7 sm:gap-9">
          {Object.entries(DATA.skills).map(([category, items]) => (
            <div key={category}>
              {/* Category label + divider */}
              <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
                <span className="text-[10px] sm:text-[11px] font-semibold
                                 tracking-widest uppercase text-gray-300 whitespace-nowrap">
                  {category}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {items.map(sk => <SkillPill key={sk.name} skill={sk} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import './TechStack.css'
import { techStackData } from './techStackData'

function SkillTile({ item }) {
  return (
    <div className="tech-tile">
      {item.type === 'logo' ? (
        <img
          src={`https://cdn.simpleicons.org/${item.key}/ffffff`}
          alt={item.name}
          className="tech-logo"
          loading="lazy"
        />
      ) : (
        <span className="tech-text">{item.name}</span>
      )}
    </div>
  )
}

function TechRow({ title, items, reverse = false }) {
  const loopItems = [...items, ...items, ...items, ...items]

  return (
    <div className="tech-row-block">
      <div className="tech-row-label">{title}</div>

      <div className="tech-row-shell">
        <div className="tech-row-fade tech-row-fade-left"></div>
        <div className="tech-row-fade tech-row-fade-right"></div>

        <div className={`tech-row-track ${reverse ? 'reverse' : ''}`}>
          {loopItems.map((item, index) => (
            <SkillTile key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TechStack() {
  return (
    <section className="tech-stack-section" id="skills">
      <div className="tech-stack-wrap">
        <div className="tech-stack-header">
          <p className="tech-stack-kicker">CORE TECHNOLOGIES</p>
          <h2>TECH STACK</h2>
        </div>

        <div className="tech-stack-rows">
          <TechRow title="Frontend" items={techStackData.frontend} />
          <TechRow title="Backend" items={techStackData.backend} reverse />
          <TechRow title="Data / AI" items={techStackData.dataAi} />
          <TechRow title="Tools" items={techStackData.tools} reverse />
        </div>
      </div>
    </section>
  )
}

export default TechStack
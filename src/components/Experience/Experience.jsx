import { roles, earlierCareer } from '../../data/experienceData'
import SectionHeading from '../SectionHeading/SectionHeading'
import TagPill from '../TagPill/TagPill'
import './experience.sass'

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <div className="container">
        <SectionHeading eyebrow="Career" title="Experience" />

        <ol className="role-list">
          {roles.map((role) => (
            <li className="role-card" key={`${role.company}-${role.period}`}>
              <div className="role-head">
                <div>
                  <p className="company">{role.company} · {role.location}</p>
                  <h3>{role.title}</h3>
                </div>
                <span className="period">{role.period}</span>
              </div>
              <ul className="bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="tags">
                {role.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3 className="earlier-heading">Earlier career</h3>
        <ul className="earlier-list">
          {earlierCareer.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <span className="period">{role.period}</span>
              <div>
                <p className="earlier-title">{role.title} · {role.company}</p>
                <p className="earlier-detail">{role.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience

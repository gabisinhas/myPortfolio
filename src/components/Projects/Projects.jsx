import { FaArrowRight } from 'react-icons/fa'
import { conceptIcons } from '../../utils/conceptIcons'
import { projects } from '../../data/projectsData'
import IconBadge from '../IconBadge/IconBadge'
import TagPill from '../TagPill/TagPill'
import SectionHeading from '../SectionHeading/SectionHeading'
import './projects.sass'

const Projects = () => {
  return (
    <section id="work" className="projects-container">
      <div className="container">
        <div className="projects-header">
          <div>
            <SectionHeading eyebrow="Selected work" title="Case studies" />
          </div>
          <a
            className="view-all"
            href="https://github.com/gabisinhas"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = conceptIcons[project.icon]
            return (
              <article className="project-card" key={project.title}>
                <IconBadge size="lg"><Icon /></IconBadge>
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="project-footer">
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <TagPill key={tag} label={tag} />
                    ))}
                  </ul>
                  <FaArrowRight className="card-arrow" aria-hidden="true" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

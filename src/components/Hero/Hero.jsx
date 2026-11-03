import { FaDownload, FaArrowRight } from 'react-icons/fa'
import Avatar from '../../img/avatar.jpg'
import { conceptIcons } from '../../utils/conceptIcons'
import { heroStats } from '../../data/heroData'
import IconBadge from '../IconBadge/IconBadge'
import './hero.sass'

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="blob blob--a hero-blob-a" aria-hidden="true" />
      <div className="blob blob--b hero-blob-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Software Engineer Full Stack</span>
          <h1>Gabriela dos Santos</h1>
          <p>
            Software engineer Full Stack with 4+ years building scalable, secure and
            reliable solutions across web, data and AI. I work end-to-end —
            from architecture and development to delivery and continuous
            improvement.
          </p>

          <dl className="hero-stats">
            {heroStats.map((stat) => {
              const Icon = conceptIcons[stat.icon]
              return (
                <div className="hero-stat" key={stat.label}>
                  <IconBadge><Icon /></IconBadge>
                  <div>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                </div>
              )
            })}
          </dl>

          <div className="hero-actions">
            <a href="#work" className="btn">
              Explore my work <FaArrowRight aria-hidden="true" />
            </a>
            <a
              className="btn-outline"
              href={`${import.meta.env.BASE_URL}Cv_GabrielaSantos_english.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload aria-hidden="true" /> Download résumé (PDF)
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={Avatar} alt="Portrait of Gabriela dos Santos" />
        </div>
      </div>
    </section>
  )
}

export default Hero

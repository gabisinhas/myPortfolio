import React from 'react'
import "./projects.sass"
import { FaVuejs, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiVuedotjs, SiVite, SiEslint, SiPrettier, SiVuetify } from 'react-icons/si'

const Projects = () => {
  const technologyIcons = {
    'Vue 3': <SiVuedotjs size={20} color="#42b883" aria-label="Vue 3" />,
    'Vue Router': <SiVuedotjs size={20} color="#42b883" aria-label="Vue Router" />,
    'Vuex': <SiVuedotjs size={20} color="#42b883" aria-label="Vuex" />,
    'Vite': <SiVite size={20} color="#646cff" aria-label="Vite" />,
    'ESLint': <SiEslint size={20} color="#4b32c3" aria-label="ESLint" />,
    'Prettier': <SiPrettier size={20} color="#f7b93e" aria-label="Prettier" />,
    'Nodejs': <FaNodeJs size={20} color="#68a063" aria-label="Node.js" />,
    'JavaScript': <FaJs size={20} color="#f7df1e" aria-label="JavaScript" />,
    'HTML': <FaHtml5 size={20} color="#e34f26" aria-label="HTML5" />,
    'CSS': <FaCss3Alt size={20} color="#1572b6" aria-label="CSS3" />,
    'Git': <FaGitAlt size={20} color="#f05032" aria-label="Git" />,
    'Docker': <FaDocker size={20} color="#2496ed" aria-label="Docker" />
  }

  const renderTechnologies = (techList) => {
    return techList.split(', ').map((tech, index) => (
      <span key={index} className="tech-icon" title={tech}>
        {technologyIcons[tech] || <FaJs size={20} color="#f7df1e" aria-label="JavaScript" />}
      </span>
    ))
  }

  return (
    <main>
      <section style={{ marginTop: '6rem', marginBottom: '3rem' }}>
        <div id="projects-content">
          <h2>Main Projects</h2>
          <br /> 
          <h3>XBIS Implementation of Maintenance Module - Jul/23</h3>
          <p>
            <b>Description:</b> Contributed to the project by delivering UX Design which approved by the client. Also, implemented the frontend module.<br/>
            <b>Technologies Used:</b> {renderTechnologies('Vue 3, Vite, ESLint, Prettier')}
          </p>
          <br />
          <h3>Vue 2 to Vue3 Migration - Jan/24</h3>
          <p>
            <b>Description:</b> Successfully migrated a legacy Vue 2 application to Vue 3, improving performance and code quality.<br/>
            <b>Technologies Used:</b> {renderTechnologies('Vue 3, Vite, ESLint, Prettier')}
          </p>
          <br/>
          <h3>Remessa Implementation - Feb/24</h3>
          <p>
            <b>Description:</b> New module to implement the Remessa feature in the application XBIS which manages the payment of invoices. Delivered full UX Design and frontend implementation.
            Besides, also contributed with the backend implementation.<br/>
            <b>Technologies Used:</b> {renderTechnologies('Nodejs, Vue 3')}
          </p>
        </div>
      </section>
    </main>
  )
}

export default Projects 
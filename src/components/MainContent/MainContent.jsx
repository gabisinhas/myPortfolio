import './maincontent.sass'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const MainContent = () => {
  return (
    <main id="main-content">
      <Projects />

      <section className="about-skills-section">
        <div className="container about-skills-grid">
          <About />
          <Skills />
        </div>
      </section>

      <Experience />
      <Contact />
    </main>
  )
}

export default MainContent

import React from 'react'
import { FaJava, FaReact, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiGithubactions, SiTailwindcss } from 'react-icons/si'
import './about.sass'

const About = () => {
  return (
    <section className='about-container'>
      <h2>About</h2>
      <p>
    Full Stack Developer (4+ years) experienced in Finance & Operations, Business Analysis, and Project Management. Proficient in Vue.js, Node.js, and Python, building scalable, user-centric web applications with JavaScript, Python, and SQL.    <br/>
    <br/>
    <p>I'm committed to continuous learning in my free time, actively studying new technologies and building personal projects to reinforce my development skills.</p>
        <br/>
        <b>Currently Studying:</b>
        <div className="tech-icons">
          <div className="tech-icon">
            <FaJava size={24} color="#f89820" aria-label="Java" />
            <span>Java</span>
          </div>
          <div className="tech-icon">
            <FaReact size={24} color="#61dafb" aria-label="React" />
            <span>React</span>
          </div>
          <div className="tech-icon">
            <SiTypescript size={24} color="#3178c6" aria-label="TypeScript" />
            <span>TypeScript</span>
          </div>
          <div className="tech-icon">
            <SiMongodb size={24} color="#47a248" aria-label="MongoDB" />
            <span>MongoDB</span>
          </div>
          <div className="tech-icon">
            <SiPostgresql size={24} color="#336791" aria-label="PostgreSQL" />
            <span>PostgreSQL</span>
          </div>
          <div className="tech-icon">
            <SiGithubactions size={24} color="#2088FF" aria-label="GitHub Actions" />
            <span>GitHub Actions</span>
          </div>
          <div className="tech-icon">
            <FaDocker size={24} color="#2496ed" aria-label="Docker" />
            <span>Docker</span>
          </div>
          <div className="tech-icon">
            <SiTailwindcss size={24} color="#38bdf8" aria-label="Tailwind CSS" />
            <span>Tailwind</span>
          </div>
        </div>
      </p>

      <p>
        <b>Soft Skills:</b>
        I'm a natural leader who's good at planning, talking clearly, and making quick decisions.
I can easily organize people and things to get big goals done efficiently.
I see the whole picture, inspire others, and make sense of tough situations to get results.
        <br/>
        <br/>
        <b>Tools & Platforms:</b>GitHub, JIRA, Confluence, SonarQube, Mend, CI/CD pipelines, IBM Cloud, qTest, Docker, Equus APRO
        Security & Compliance: Code Security, CI/CD, Vulnerabilties management
        Collaboration & Leadership: Agile Methodologies, Team Empowerment, SCRUM
      </p>
    </section>
  )
}

export default About

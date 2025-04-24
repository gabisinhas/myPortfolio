import React from 'react'
import Technologies from '../Technologies/Technologies'
import './skills.sass'

const Skills = () => {
  return (
    <main>
      <section style={{ marginTop: '8rem' }}>
        <div id="skills-content">
        <h2>Core Skills</h2>
        <Technologies />
        <br /> 
        <p>
          <b>Tools & Platforms:</b> GitHub, JIRA, Confluence, Monday, Mural, Instana, SonarQube, Mend, CI/CD pipelines, IBM Cloud, qTest, Docker, Equus APRO
          Security & Compliance: Code Security, CI/CD, Vulnerabilties management
        </p>
        </div>
      </section>
    </main>
  )
}

export default Skills 
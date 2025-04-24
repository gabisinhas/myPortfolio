import React from 'react'
import "./projects.sass"

const Projects = () => {
  return (
    <main>
      <section style={{ marginTop: '6rem', marginBottom: '3rem' }}>
        <div id="projects-content">
        <h2>Main Projects</h2>
        <br /> 
        <h3>XBIS Implementation of Maintenance Module - Jul/23</h3>
        <p>
          <b>Description:</b> Contributed to the project by delivering UX Design which approved by the client. Also, implemented the frontend module.<br/>
          <b>Technologies Used:</b> Vue 3, Vue Router, Vuex, Vite, ESLint, Prettier
        </p>
        <br />
        <h3>Vue 2 to Vue3 Migration - Jan/24</h3>
        <p>
          <b>Description:</b> Successfully migrated a legacy Vue 2 application to Vue 3, improving performance and code quality.<br/>
          <b>Technologies Used:</b> Vue 3, Vue Router, Vuex, Vite, ESLint, Prettier
        </p>
        <br/>
        <h3>Remessa Implementation - Feb/24</h3>
        <p>
          <b>Description:</b> New module to implement the Remessa feature in the application XBIS which manages the payment of invoices. Delivered full UX Design and frontend implementation.
          Besides, also contributed with the backend implementation.<br/>
          <b>Technologies Used:</b> Nodejs, Vue 3, 
        </p>
        </div>
      </section>
    </main>

  )
}

export default Projects 
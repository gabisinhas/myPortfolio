import React from 'react'
import '../styles/components/technologies.sass'

const techAreas = ["Html", "CSS", "JavaScript","Vue.js","React", "Node.Js", "Python", "CICD", "DevOps","Docker", "Code Security", "GitHub", "SQL", "UX Design"]

const Technologies = () => {
  return (
  <div className='container-code-tag '>
  {techAreas.map((area, index) =>(
      <p className='code-tag' key={index}>{area}</p>      
  ))}
  </div>
  
)}

export default Technologies

import React from 'react'
import { Link } from 'react-router-dom'
import './header.sass'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/skills" className="nav-link">Skills</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
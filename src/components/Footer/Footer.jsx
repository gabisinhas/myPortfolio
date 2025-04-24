import React from 'react'
import './footer.sass'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Gabriela dos Santos. All rights reserved.</p>
        <p>Built with React and Vite</p>
      </div>
    </footer>
  )
}

export default Footer 
import { useState } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './header.sass'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <nav className="nav container" aria-label="Primary">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">GS</span>
          <span className="brand-name">Gabriela dos Santos</span>
        </a>

        <div className="nav-right">
          <ul id="primary-nav-list" className={`nav-list ${open ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <a href="https://github.com/gabisinhas" className="icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/gabsanto/" className="icon-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <ThemeToggle />

            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="primary-nav-list"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

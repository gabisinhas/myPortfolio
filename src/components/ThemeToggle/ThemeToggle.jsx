import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './themetoggle.sass'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.getAttribute('data-theme') || 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable (private mode, blocked cookies) — theme still applies for this view
    }
  }, [theme])

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle

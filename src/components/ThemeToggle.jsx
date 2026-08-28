import { useState } from 'react'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme || 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  const toggleTheme = () => {
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      nextTheme === 'dark' ? '#111111' : '#ffffff',
    )
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden="true" className="theme-toggle-mark">◐</span>
      <span>{nextTheme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default ThemeToggle

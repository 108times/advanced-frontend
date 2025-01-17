import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './theme-context'

interface UseThemeResult {
  toggleTheme: () => void
  theme: THEME
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}

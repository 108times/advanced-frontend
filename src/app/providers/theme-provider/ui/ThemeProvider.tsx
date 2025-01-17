import { FC, ReactNode, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from '../lib/theme-context'

interface Props {
  children: ReactNode
  defaultTheme?: THEME
}

export const ThemeProvider: FC<Props> = ({
  children,
  defaultTheme = DEFAULT_THEME,
}) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme)

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const DEFAULT_THEME =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT

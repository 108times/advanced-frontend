import { StoryFn } from '@storybook/react'
import { ThemeProvider } from 'app/providers/theme-provider'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'
import { AppWrapper } from 'app/ui/AppWrapper'

export const ThemeDecorator = (theme: THEME) => {
  const Decorator = (Story: StoryFn) => (
    <ThemeProvider defaultTheme={theme}>
      <AppWrapper>
        <Story />
      </AppWrapper>
    </ThemeProvider>
  )

  return Decorator
}

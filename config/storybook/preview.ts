import type { Preview } from '@storybook/react'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'
import { RouterDecorator } from 'shared/config/storybook/router-decorator'
import { StylesDecorator } from 'shared/config/storybook/styles-decorator'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // tags: ['autodocs'],
  decorators: [StylesDecorator, ThemeDecorator(THEME.LIGHT), RouterDecorator],
}

export default preview

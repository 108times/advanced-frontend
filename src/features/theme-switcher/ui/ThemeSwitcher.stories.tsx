import { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(THEME.DARK)],
}

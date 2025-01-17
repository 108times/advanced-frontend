import { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
}

export default meta

type Story = StoryObj<typeof LangSwitcher>

export const Default: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(THEME.DARK)],
}

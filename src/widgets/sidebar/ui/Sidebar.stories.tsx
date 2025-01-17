import { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(THEME.DARK)],
}

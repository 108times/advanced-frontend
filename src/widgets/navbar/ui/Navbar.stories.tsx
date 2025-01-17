import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(THEME.DARK)],
}

import { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof Loader> = {
  title: 'ui/Loader',
  component: Loader,
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(THEME.DARK)],
}

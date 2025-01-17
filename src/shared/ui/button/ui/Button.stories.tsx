import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonVariants } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariants),
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

export const DefaultDark: Story = {
  args: {
    children: 'DefaultDark AppLink',
  },
  decorators: ThemeDecorator(THEME.DARK),
}

export const Clear: Story = {
  args: {
    children: 'Clear Button',
    variant: ButtonVariants.CLEAR,
  },
}

export const ClearDark: Story = {
  args: {
    children: 'ClearDark Button',
    variant: ButtonVariants.CLEAR,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: ButtonVariants.OUTLINE,
  },
}

export const OutlinedDark: Story = {
  args: {
    children: 'OutlinedDark Button',
    variant: ButtonVariants.OUTLINE,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

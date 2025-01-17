import { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkVariants } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { THEME } from 'app/providers/theme-provider/lib/theme-context'

const meta: Meta<typeof AppLink> = {
  title: 'ui/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(AppLinkVariants),
    },
  },
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'Primary AppLink',
    variant: AppLinkVariants.PRIMARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'PrimaryDark AppLink',
    variant: AppLinkVariants.PRIMARY,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

export const Inverted: Story = {
  args: {
    children: 'Inverted AppLink',
    variant: AppLinkVariants.INVERTED,
  },
}

export const InvertedDark: Story = {
  args: {
    children: 'InvertedDark AppLink',
    variant: AppLinkVariants.INVERTED,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

export const Secondary: Story = {
  args: {
    children: 'Secondary AppLink',
    variant: AppLinkVariants.SECONDARY,
  },
}

export const SecondaryDark: Story = {
  args: {
    children: 'SecondaryDark AppLink',
    variant: AppLinkVariants.SECONDARY,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

export const Red: Story = {
  args: {
    children: 'Red AppLink',
    variant: AppLinkVariants.RED,
  },
}

export const RedDark: Story = {
  args: {
    children: 'RedDark AppLink',
    variant: AppLinkVariants.RED,
  },
  decorators: ThemeDecorator(THEME.DARK),
}

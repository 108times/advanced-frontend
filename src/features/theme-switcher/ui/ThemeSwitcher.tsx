import { FC } from 'react'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/theme-provider'
import ThemeIcon from 'shared/assets/icons/theme.svg'
import { Button, ButtonVariants } from 'shared/ui/button'
import { classNames } from 'shared/lib/class-names/classNames'

interface Props {
  className?: string
}

export const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant={ButtonVariants.CLEAR}
      onClick={toggleTheme}
      className={className}
    >
      <ThemeIcon className={classNames(cls[theme])} />
    </Button>
  )
}

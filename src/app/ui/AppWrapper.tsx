import { useTheme } from 'app/providers/theme-provider'
import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/class-names/classNames'

type Props = {
  children: ReactNode
}

export const AppWrapper: FC<Props> = ({ children }) => {
  const { theme } = useTheme()

  return <div className={classNames('app', theme)}>{children}</div>
}

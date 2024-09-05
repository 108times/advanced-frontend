import { FC } from 'react'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkVariants {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface Props extends LinkProps {
  variant?: AppLinkVariants
}

export const AppLink: FC<Props> = (props) => {
  const {
    children,
    className,
    variant = AppLinkVariants.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      className={classNames(cls.AppLink, className, cls[variant])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

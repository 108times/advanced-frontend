import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'

export enum ButtonVariants {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariants
}

export const Button: FC<Props> = (props) => {
  const { className, children, variant, ...otherProps } = props

  return (
    <button
      className={classNames(cls.Button, cls[variant], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}

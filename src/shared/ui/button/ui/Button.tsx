import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'

export enum ButtonVariants {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizes {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariants
  square?: boolean
  size?: ButtonSizes
}

export const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    variant,
    square,
    size = ButtonSizes.M,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(
        cls.Button,
        cls[variant],
        square && cls.square,
        size && cls[size],
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

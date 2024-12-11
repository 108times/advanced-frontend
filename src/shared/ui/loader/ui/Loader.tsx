import { FC } from 'react'
import cls from './Loader.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'

interface Props {
  className?: string
}

export const Loader: FC<Props> = ({ className }) => (
  <div className={classNames(cls.loader, className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

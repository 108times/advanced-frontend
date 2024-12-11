import { FC } from 'react'
import cls from './PageLoader.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'
import { Loader } from 'shared/ui/loader'

interface Props {
  className?: string
}

export const PageLoader: FC<Props> = ({ className }) => (
  <div className={classNames(cls.PageLoader, className)}>
    <Loader />
  </div>
)

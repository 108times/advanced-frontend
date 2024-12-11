import { FC } from 'react'
import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/class-names/classNames'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

export const NotFoundPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFoundPage, className)}>
      {t('page-not-found')}
    </div>
  )
}

import { FC } from 'react'
import { classNames } from 'shared/lib/class-names/classNames'
import { AppLink, AppLinkVariants } from 'shared/ui/app-link/ui/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <nav className={classNames(cls.Navbar, className)}>
      <div className={cls.links}>
        <AppLink variant={AppLinkVariants.INVERTED} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink variant={AppLinkVariants.INVERTED} to="/about">
          {t('О нас')}
        </AppLink>
      </div>
    </nav>
  )
}

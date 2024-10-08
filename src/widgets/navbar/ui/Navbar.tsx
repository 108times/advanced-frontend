import { FC } from 'react'
import { classNames } from 'shared/lib/class-names/classNames'
import { AppLink, AppLinkVariants } from 'shared/ui/app-link/ui/AppLink'
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => (
  <nav className={classNames(cls.Navbar, className)}>
    <div className={cls.links}>
      <AppLink variant={AppLinkVariants.INVERTED} to="/">
        Главная
      </AppLink>
      <AppLink variant={AppLinkVariants.INVERTED} to="/about">
        О нас
      </AppLink>
    </div>
  </nav>
)

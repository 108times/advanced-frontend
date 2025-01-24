import { FC, useState } from 'react'
import { classNames } from 'shared/lib/class-names/classNames'
import { ThemeSwitcher } from 'features/theme-switcher'
import { LangSwitcher } from 'features/lang-switcher'
import cls from './Sidebar.module.scss'

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <nav
      data-testid="sidebar"
      className={classNames(cls.Sidebar, className, collapsed && cls.collapsed)}
    >
      <button data-testid="sidebar-toggle" onClick={toggleCollapsed}>
        {/* toggle */}
      </button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </nav>
  )
}

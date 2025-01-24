import { FC } from 'react'
import { Button, ButtonVariants } from 'shared/ui/button'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<Props> = ({ className, short }) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={className}
      variant={ButtonVariants.CLEAR}
      onClick={toggle}
    >
      {short ? t("Короткий язык") : t('Язык')}
    </Button>
  )
}

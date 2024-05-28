import { FC } from "react";
import { Button, ButtonVariants } from "shared/ui/button";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={className}
      variant={ButtonVariants.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};

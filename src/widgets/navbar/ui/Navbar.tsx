import { FC } from "react";
import { classNames } from "shared/lib/class-names/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/AppLink";
import cls from "./Navbar.module.scss";

type Props = {
  className?: string;
};

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={classNames(cls.Navbar, className)}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О нас
      </AppLink>
    </nav>
  );
};

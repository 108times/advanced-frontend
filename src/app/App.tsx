import "./styles/index.scss";
import { classNames } from "shared/lib/class-names/classNames";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar/";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";
import "shared/config/i18n/i18n";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

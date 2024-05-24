import "./styles/index.scss";
import { classNames } from "shared/lib/class-names/classNames";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar/ui/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>Toggle </button>

      <Navbar />

      <AppRouter />
    </div>
  );
};

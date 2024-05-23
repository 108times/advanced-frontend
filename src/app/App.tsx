import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/class-names/classNames";
import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>Toggle </button>

      <hr />

      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <hr />

      <AppRouter />
    </div>
  );
};

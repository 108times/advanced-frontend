import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPage } from "pages/main-page";
import { Suspense } from "react";
import { classNames } from "shared/lib/class-names/classNames";
import { useTheme } from "./providers/theme-provider";
import { AboutPage } from "pages/about-page";

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

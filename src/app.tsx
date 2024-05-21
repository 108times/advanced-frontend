import "./styles/index.scss";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/main-page/MainPage.async";
import { AboutPageAsync } from "./pages/about-page/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/use-theme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>Toggle </button>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

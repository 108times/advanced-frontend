import { Counter } from "./counter";
import "./index.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/main-page/MainPage.async";
import { AboutPageAsync } from "./pages/about-page/AboutPage.async";
import { Suspense } from "react";
export const App = () => {
  return (
    <div className="app">
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

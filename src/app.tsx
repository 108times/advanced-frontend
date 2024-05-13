import { Counter } from "./counter";
import "./index.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutPage } from "./pages/about-page/AboutPage";
import { MainPage } from "./pages/main-page/MainPage";
import { Link } from "react-router-dom";
export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "16px" }}>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

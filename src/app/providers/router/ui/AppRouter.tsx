import { Routes, Route } from "react-router-dom";
import { MainPage } from "pages/main-page";
import { Suspense } from "react";
import { AboutPage } from "pages/about-page";
import { ROUTE_CONFIG } from "shared/config/route-config/route-config";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(ROUTE_CONFIG).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

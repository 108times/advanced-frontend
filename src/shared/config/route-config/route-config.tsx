import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { RouteProps } from 'react-router-dom'

export enum APP_ROUTES {
  MAIN = 'main',
  ABOUT = 'about',
}

export const ROUTE_PATH: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
}

export const ROUTE_CONFIG: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: ROUTE_PATH.main,
    element: <MainPage />,
  },
  [APP_ROUTES.ABOUT]: {
    path: ROUTE_PATH.about,
    element: <AboutPage />,
  },
}

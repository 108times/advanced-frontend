import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { ROUTE_CONFIG } from 'shared/config/route-config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = () => (
  <Routes>
    {Object.values(ROUTE_CONFIG).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
)

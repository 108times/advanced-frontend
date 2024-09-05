import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { ROUTE_CONFIG } from 'shared/config/route-config/route-config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(ROUTE_CONFIG).map(({ path, element }) => (
          <Route
            path={path}
            element={<div className="page-wrapper">{element}</div>}
            key={path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

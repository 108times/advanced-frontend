import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar/'
import { Sidebar } from 'widgets/sidebar'
import 'shared/config/i18n/i18n'
import { AppWrapper } from './ui/AppWrapper'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/loader'

export const App = () => {
  return (
    <AppWrapper>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </AppWrapper>
  )
}

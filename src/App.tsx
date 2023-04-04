import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import ProtectedRoute from './components/protected-route'
import Demo from './pages'
import CompanySwitcher from './components/company-switcher'
import Company from './pages/companies'
import ImpactAreas from './pages/areas'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
  const { user } = useAuth0()

  useEffect(() => {
    if (!user) return

    localStorage.setItem('sessionId', user.sub!)

    Mixpanel.identify(user.sub!)
    Mixpanel.people.set({ email: user.email, name: user.name, nickname: user.nickname })
  }, [user])

  return (
    <div className="container mx-auto mt-4 h-screen py-6">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Demo />
            </ProtectedRoute>
          }
        >
          <Route index element={<CompanySwitcher />} />
          <Route path="companies/:company" element={<ImpactAreas />} />
          <Route path="companies/:company/themes/:theme?" element={<Company />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

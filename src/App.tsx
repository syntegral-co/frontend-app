import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import ProtectedRoute from './components/protected-route'
import CompanySwitcher from './components/company-switcher'
import Demo from './pages'
import Company from './pages/companies'
import ImpactAreas from './pages/areas'
import Themes from './pages/themes'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
  const { user } = useAuth0()

  useEffect(() => {
    if (!user) return

    localStorage.setItem('sessionId', user.sub!)

    Mixpanel.identify(user.sub!)
    Mixpanel.people.set({ Email: user.email, Name: user.name, Nickname: user.nickname })
  }, [user])

  return (
    <div className="container mx-auto mt-4 flex h-screen flex-col py-6">
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
          <Route path="companies/:company" element={<Company />} />
          <Route path="companies/:company/areas" element={<ImpactAreas />} />
          <Route path="companies/:company/areas/themes/:theme?" element={<Themes />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

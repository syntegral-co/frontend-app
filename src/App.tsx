import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import CompanySwitcher from './components/company-switcher'
import Demo from './pages'
import Company from './pages/companies'
import ImpactAreas from './pages/companies/areas'
import Themes from './pages/companies/areas/themes'
import ImpactArea from './pages/companies/areas/themes/impact'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
  const { user } = useAuth0()

  useEffect(() => {
    if (!user) return

    localStorage.setItem('sessionId', user.sub!)

    Mixpanel.identify(user.sub!)
    Mixpanel.people.set({
      Email: user.email,
      Name: user.name,
      Nickname: user.nickname,
    })
  }, [user])

  return (
    <div className="container mx-auto mt-4 flex h-screen flex-col py-6">
      <Routes>
        <Route path="/" element={<Demo />}>
          <Route index element={<CompanySwitcher />} />
          <Route path="companies/:company" element={<Company />} />
          <Route path="companies/:company/areas" element={<ImpactAreas />} />
          <Route
            path="companies/:company/areas/themes/:theme?"
            element={<Themes />}
          />
          <Route
            path="companies/:company/areas/themes/:theme/:impactArea"
            element={<ImpactArea />}
          />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

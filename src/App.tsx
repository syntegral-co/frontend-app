import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import CompanySwitcher from './components/company-switcher'
import Demo from './pages'
import Company from './pages/companies'
import Themes from './pages/companies/categories/themes'
import Categories from './pages/companies/categories'
import Theme from './pages/companies/categories/themes/theme'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
  const { user } = useAuth0()

  useEffect(() => {
    if (!user) return

    const sessionId = uuidv4()
    localStorage.setItem('sessionId', sessionId)

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
          <Route
            path="companies/:company/categories"
            element={<Categories />}
          />
          <Route
            path="companies/:company/categories/:category/themes"
            element={<Themes />}
          />
          <Route
            path="companies/:company/categories/:category/themes/score"
            element={<Categories />}
          />
          <Route
            path="companies/:company/categories/:category/themes/:theme"
            element={<Theme />}
          />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

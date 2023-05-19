import { Suspense, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import CompanySwitcher from './components/company-switcher'
import Demo from './pages'
import Spinner from './components/spinner'
import Company from './pages/companies'
import Themes from './pages/companies/themes'
import Theme from './pages/companies/themes/theme'
import NotFound from './pages/404'
import DocumentDrawer from './components/document-drawer'

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
    <>
      <div className="container mx-auto mt-4 flex h-screen flex-col py-6 px-4 md:px-0">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Demo />}>
              <Route index element={<CompanySwitcher />} />
              <Route path="companies/:company" element={<Company />} />
              <Route path="companies/:company/themes" element={<Themes />} />
              <Route
                path="companies/:company/themes/:theme"
                element={<Theme />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <DocumentDrawer />
    </>
  )
}

export default App

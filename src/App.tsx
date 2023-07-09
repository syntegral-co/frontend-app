import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserSession from './utils/session'
import Mixpanel from './utils/tracking'
import './utils/logging'
import Demo from './pages'
import AssetClassSwitcher from './components/asset-class-switcher'
import AssetSwitcher from './components/asset-switcher'
import Spinner from './components/spinner'
import Asset from './pages/assets'
import Themes from './pages/assets/themes'
import Theme from './pages/assets/themes/theme'
import Upload from './pages/upload'
import Download from './pages/download'
import NotFound from './pages/404'

function App() {
  const { user } = useAuth0()

  useEffect(() => {
    if (!user) return

    UserSession.set()

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
            <Route path="/swigco?" element={<Demo />}>
              <Route index element={<AssetClassSwitcher />} />
              <Route path="classes/:class" element={<AssetSwitcher />} />
              <Route path="classes/:class/assets/:asset" element={<Asset />} />
              <Route
                path="classes/:class/assets/:asset/themes"
                element={<Themes />}
              />
              <Route
                path="classes/:class/assets/:asset/themes/:theme"
                element={<Theme />}
              />
            </Route>
            <Route path="upload" element={<Upload />} />
            <Route path="swigco?/download/:asset" element={<Download />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App

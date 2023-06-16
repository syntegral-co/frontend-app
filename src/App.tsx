import { Suspense, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Mixpanel from './utils/tracking'
import Demo from './pages'
import AssetClassSwitcher from './components/asset-class-switcher'
import AssetSwitcher from './components/asset-switcher'
import Spinner from './components/spinner'
import Asset from './pages/assets'
import Themes from './pages/assets/themes'
import Theme from './pages/assets/themes/theme'
import Upload from './pages/upload'
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
    <>
      <div className="container mx-auto mt-4 flex h-screen flex-col py-6 px-4 md:px-0">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/swigco?" element={<Demo />}>
              <Route index element={<AssetClassSwitcher />} />
              <Route path="class/:class" element={<AssetSwitcher />} />
              <Route path="assets/:asset" element={<Asset />} />
              <Route path="themes" element={<Themes />} />
              <Route path="themes/:theme" element={<Theme />} />
            </Route>
            <Route path="upload" element={<Upload />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App

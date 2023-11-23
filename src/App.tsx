import { Suspense, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserSession from 'utils/session'
import Mixpanel from 'utils/tracking'
import { routes } from 'utils/routes'
import Spinner from 'components/spinner'
import ParticlesAnimation from 'components/particles'
import 'utils/logging'

const router = createBrowserRouter(routes)

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
    <div className="container mx-auto flex h-screen min-h-screen max-w-full flex-col bg-base-100/50 px-4 py-6 md:px-20">
      <ParticlesAnimation />
      <Suspense fallback={<Spinner context="data" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App

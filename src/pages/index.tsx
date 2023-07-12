import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useIsSwigcoDemo } from './assets/hooks'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from '../components/nav'
import Spinner from '../components/spinner'

function Demo() {
  const { pathname, ...location } = useLocation()
  const isSwigcoDemo = useIsSwigcoDemo()

  if (isSwigcoDemo && !pathname.includes('swigco/classes/3'))
    return <Navigate to="/swigco/classes/3" />

  if (!isSwigcoDemo && pathname.includes('swigco')) return <Navigate to="/" />

  return (
    <>
      <Nav />
      <div className="flex h-full gap-4">
        <Outlet />
      </div>
    </>
  )
}

export default withAuthenticationRequired(Demo, {
  onRedirecting: () => <Spinner />,
})

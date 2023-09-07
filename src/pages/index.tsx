import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserRoles } from './assets/hooks'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from 'components/nav'
import Spinner from 'components/spinner'

function Demo() {
  const { pathname } = useLocation()
  const userRoles = useUserRoles()

  if (
    userRoles.includes('SwigCo') &&
    !userRoles.includes('Sysadmin') &&
    !pathname.includes('swigco/classes/3')
  )
    return <Navigate to="/swigco/classes/3" />

  if (
    !userRoles.includes('SwigCo') &&
    !userRoles.includes('Sysadmin') &&
    pathname.includes('swigco')
  )
    return <Navigate to="/" />

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

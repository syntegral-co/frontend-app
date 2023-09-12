import { Outlet } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from 'components/nav'
import Spinner from 'components/spinner'

function Demo() {
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
  onRedirecting: () => <Spinner context="user data" />,
})

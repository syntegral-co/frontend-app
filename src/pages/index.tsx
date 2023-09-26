import { Outlet } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from 'components/nav'
import Spinner from 'components/spinner'
import ParticlesAnimation from 'components/particles'

function Demo() {
  return (
    <>
      <Nav />
      <div className="flex h-full gap-4">
        <Outlet />
      </div>
      <ParticlesAnimation />
    </>
  )
}

export default withAuthenticationRequired(Demo, {
  onRedirecting: () => <Spinner context="user data" />,
})

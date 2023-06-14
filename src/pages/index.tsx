import { useIsSwigcoDemo } from './companies/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from '../components/nav'
import Spinner from '../components/spinner'

function Demo() {
  const isSwigcoDemo = useIsSwigcoDemo()

  if (isSwigcoDemo) return <Navigate to="/swigco/assets/3" />

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

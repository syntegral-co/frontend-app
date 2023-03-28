import { ReactNode } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from '../spinner'

interface IProtectedRoute {
  children?: ReactNode
}

function ProtectedRoute({ children }: IProtectedRoute): JSX.Element {
  const { loginWithRedirect, user, isLoading } = useAuth0()

  if (isLoading) return <Spinner />

  if (!user) {
    loginWithRedirect()
    return <></>
  }

  return <>{children}</>
}

export default ProtectedRoute

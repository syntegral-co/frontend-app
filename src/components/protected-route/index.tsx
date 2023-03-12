import { useAuth0 } from '@auth0/auth0-react'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface IProtectedRoute {
  children?: ReactNode
}

function ProtectedRoute({ children }: IProtectedRoute): JSX.Element {
  const { user, isLoading } = useAuth0()

  if (isLoading) return <></>

  if (!user) {
    return <Navigate to='/' replace />
  }

  return <>{children}</>
}

export default ProtectedRoute

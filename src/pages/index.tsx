import { Outlet } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Spinner from 'components/spinner'
import Nav from 'components/nav'
import DocumentModal from 'components/document-modal'

function Demo() {
  return (
    <>
      <Nav />
      <Outlet />
      <DocumentModal />
    </>
  )
}

export default withAuthenticationRequired(Demo, {
  onRedirecting: () => <Spinner context="user data" />,
})

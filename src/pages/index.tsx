import { Outlet } from 'react-router-dom'
import Nav from '../components/nav'

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

export default Demo

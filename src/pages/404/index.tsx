import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8 text-center">
      <h1 className="text-2xl font-bold font-conthax text-teal">Oops!</h1>
      <div>
        <p>Sorry, an unexpected error has occurred.</p>
        <NavLink className="text-lg font-bold" to="../">
          Go back
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound

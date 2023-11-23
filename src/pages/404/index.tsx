import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto max-w-7xl p-2 text-center sm:p-6 lg:p-8">
      <h1 className="font-maven text-2xl font-bold text-teal md:text-3xl">
        Oops!
      </h1>
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

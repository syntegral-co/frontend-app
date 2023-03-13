import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container mx-auto max-w-7xl p-2 text-white sm:p-6 lg:p-8'>
      <h1 className='text-center text-xl font-bold'>Oops!</h1>
      <div className='text-center'>
        <p>Sorry, an unexpected error has occurred.</p>
        <NavLink className='text-lg font-bold' to='/'>
          Go back
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound

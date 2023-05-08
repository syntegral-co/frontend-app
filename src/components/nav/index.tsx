import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/images/syntegral.png'

type NavLink = {
  title: string
  to: string
}

const NAV_LINKS: NavLink[] = []

const ACCOUNT_LINKS: NavLink[] = [
  {
    title: 'Your profile',
    to: '#',
  },
  {
    title: 'Settings',
    to: '#',
  },
]

function Nav() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  if (isLoading) return null

  return (
    <div className="navbar mb-8 bg-base-100 px-4 md:px-0">
      <div className="navbar-start lg:hidden">
        <img className="h-8 w-auto" src={logo} alt="Syntegral" />
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu  menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {NAV_LINKS.map(({ title, to }, index) => (
              <li key={index}>
                <NavLink to={to}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isAuthenticated && (
        <div className="navbar-start hidden lg:flex">
          <a className="btn-ghost btn text-xl normal-case">
            <img className="h-8 w-auto" src={logo} alt="Syntegral" />
          </a>
          <ul className="menu menu-horizontal px-1">
            {NAV_LINKS.map(({ title, to }, index) => (
              <li key={index}>
                <NavLink to={to}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div className="avatar cursor-pointer" tabIndex={0}>
              <div className="mask mask-hexagon w-8 rounded-full">
                <img src={user?.picture} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  w-52 bg-base-200 p-2 shadow"
            >
              <li>
                <a
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a className="btn" onClick={() => loginWithRedirect()}>
            Sign in
          </a>
        )}
      </div>
    </div>
  )
}

export default Nav

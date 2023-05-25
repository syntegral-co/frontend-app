import { useCurrentAsset } from '../asset-switcher/hooks'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useAuth0 } from '@auth0/auth0-react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'
import Icon from '../icon'
import { NavbarLink } from './types'

const ACCOUNT_LINKS: NavbarLink[] = [
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
  const currentAsset = useCurrentAsset()
  const currentCompany = useCurrentCompany()
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  if (isLoading) return null

  const NAV_LINKS: NavbarLink[] = [
    {
      title: 'Discovery',
      to: `/${currentAsset}`,
      icon: 'compass',
      hidden: !currentAsset,
    },
    {
      title: 'Chat',
      to: `${currentAsset}/companies/${currentCompany?.id}`,
      icon: 'bubbles',
      hidden: !currentCompany,
    },
    {
      title: 'Reporting',
      to: `${currentAsset}/companies/${currentCompany?.id}/themes`,
      icon: 'pie',
      hidden: !currentCompany,
    },
    {
      title: 'Download',
      to: '/test',
      icon: 'cloud-download',
      disabled: true,
      hidden: !currentCompany,
    },
    {
      title: 'Upload',
      to: '/test',
      icon: 'cloud-upload',
      disabled: true,
      hidden: !currentCompany,
    },
  ]

  const navLinksElement = NAV_LINKS.map(
    ({ title, to, icon, disabled, hidden }, index) => (
      <li
        key={index}
        className={classnames({ hidden: hidden, disabled: disabled })}
      >
        <NavLink to={to} end>
          <Icon icon={icon!} size={20} />
          {title}
        </NavLink>
      </li>
    ),
  )

  return (
    <div className="navbar mb-8 bg-base-100 px-4 md:px-0">
      <div className="flex-none lg:hidden">
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
            className="dropdown-content menu menu-compact mt-3 w-52 rounded-md border-2 border-accent-focus bg-base-100 p-2 shadow"
          >
            {navLinksElement}
          </ul>
        </div>
        <div className="flex cursor-default items-center justify-center">
          {currentCompany ? (
            <div className="badge-primary badge-outline badge badge-xs p-2">
              {currentCompany.name}
            </div>
          ) : null}
        </div>
      </div>
      {isAuthenticated && (
        <div className="hidden flex-1 lg:flex">
          <ul className="menu menu-horizontal w-full px-1">
            {navLinksElement}
            <li className="pointer-events-none flex items-center justify-center">
              {currentCompany ? (
                <div className="badge-primary badge-outline badge badge-xs">
                  {currentCompany.name}
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      )}
      <div className="ml-auto flex-none gap-2">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div className="avatar cursor-pointer" tabIndex={0}>
              <div className="mask mask-hexagon w-8 rounded-full">
                <img src={user?.picture} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu w-52 rounded-md border-2 border-accent-focus bg-base-200 p-2 shadow"
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

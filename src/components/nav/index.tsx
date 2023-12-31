import { useCurrentAssetClass } from '../asset-class-switcher/hooks'
import { useCurrentAsset, useIsIneriaUser } from 'pages/assets/hooks'
import { useAuth0 } from '@auth0/auth0-react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import Icon from 'components/icon'
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
  const isIneriaUser = useIsIneriaUser()
  const currentAssetClass = useCurrentAssetClass()
  const currentAsset = useCurrentAsset()
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  if (isLoading) return null

  const NAV_LINKS: NavbarLink[] = [
    {
      title: 'Home',
      to: '/',
      icon: 'compass',
    },
    {
      title: 'Reporting',
      to: `classes/${currentAssetClass?.id}/assets/${currentAsset?.id}/themes`,
      icon: 'pie',
      hidden: !currentAssetClass || !currentAsset,
    },
    {
      title: 'Download',
      to: `classes/${currentAssetClass?.id}/assets/${currentAsset?.id}/download`,
      icon: 'cloud-download',
      disabled:
        !currentAssetClass ||
        !currentAsset ||
        (currentAssetClass.id !== 3 && currentAssetClass.id !== 7),
    },
    {
      title: 'Upload',
      to: '/upload',
      icon: 'cloud-upload',
      disabled: true,
    },
  ]

  const navLinksElement = NAV_LINKS.map(
    ({ title, to, icon, disabled, hidden }, index) => (
      <li
        key={index}
        className={clsx({
          hidden: hidden,
          'disabled pointer-events-none': disabled,
        })}
      >
        <NavLink
          to={to}
          className={({ isActive }) =>
            clsx({ 'font-bold text-accent': isActive })
          }
          end
        >
          <Icon icon={icon!} size={20} />
          {title}
        </NavLink>
      </li>
    ),
  )

  return (
    <nav className="navbar mb-8 px-4 md:px-0">
      <div className="w-2/3 flex-none lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
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
            className="menu-compact menu dropdown-content z-10 mt-3 w-52 rounded-md border-2 border-accent-focus bg-base-100 p-2 shadow"
          >
            {navLinksElement}
          </ul>
        </div>
        {currentAsset && (
          <p className="text-xs text-primary">{currentAsset!.name}</p>
        )}
      </div>
      {isAuthenticated && (
        <div className="hidden flex-1 lg:flex">
          <ul className="menu menu-horizontal w-full px-1">
            {navLinksElement}
            <li className="pointer-events-none flex items-center justify-center">
              {currentAsset ? (
                <div className="badge badge-primary badge-outline badge-xs flex">
                  {currentAsset.name}
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      )}
      <div className="ml-auto mr-4 flex-none gap-2">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div className="cursor-pointer" tabIndex={0}>
              <img
                className="h-6 max-h-16 w-auto object-contain sm:h-8 sm:max-w-[90px]"
                src={user?.picture}
                alt={`${user!.name} avatar`}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content w-52 rounded-md border-2 border-accent-focus bg-base-200 p-2 shadow"
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
    </nav>
  )
}

export default Nav

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const NAV_LINKS = [
  {
    title: 'Dashboard',
    to: '/dashboard',
  },
  {
    title: 'Demo',
    to: '/demo',
  },
]

const ACCOUNT_LINKS = [
  {
    title: 'Your profile',
    to: '#',
  },
  {
    title: 'Settings',
    to: '#',
  },
  {
    title: 'Sign out',
    to: '#',
  },
]

function Nav() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openProfileMenu, setOpenProfileMenu] = useState(false)

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() =>
                setOpenMobileMenu((openMobileMenu) => !openMobileMenu)
              }
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={classNames('h-6 w-6', {
                  hidden: openMobileMenu,
                  block: !openMobileMenu,
                })}
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                className={classNames('h-6 w-6', {
                  block: openMobileMenu,
                  hidden: !openMobileMenu,
                })}
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <img
                className='block h-8 w-auto lg:hidden'
                src='./syntegral.png'
                alt='Syntegral'
              />
              <img
                className='hidden h-8 w-auto lg:block'
                src='./syntegral.png'
                alt='Syntegral'
              />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {NAV_LINKS.map(({ title, to }, index) => (
                  <NavLink
                    key={index}
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-teal-600'
                        : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  >
                    {title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                  onClick={() =>
                    setOpenProfileMenu((openProfileMenu) => !openProfileMenu)
                  }
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>

              <div
                className={classNames(
                  'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                  { hidden: !openProfileMenu }
                )}
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
                tabIndex={-1}
              >
                {ACCOUNT_LINKS.map(({ title, to }, index) => (
                  <a
                    key={index}
                    href={to}
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-0'
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames('sm:hidden', { hidden: !openMobileMenu })}
        id='mobile-menu'
      >
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {NAV_LINKS.map(({ title, to }, index) => (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-teal-600'
                  : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav

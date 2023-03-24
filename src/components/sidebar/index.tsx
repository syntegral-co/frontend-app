import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/syntegral.png'

interface INavLink {
  title: string
  to: string
}

const NAV_LINKS: INavLink[] = [
  {
    title: 'Account',
    to: '/companies/6',
  },
  {
    title: 'Discovery',
    to: '/test',
  },
  {
    title: 'Reporting',
    to: '/test',
  },
  {
    title: 'Download',
    to: '/test',
  },
  {
    title: 'Upload',
    to: '/test',
  },
]

function Sidebar() {
  return (
    <ul className='menu menu-compact hidden w-96 rounded-md bg-base-200 p-2 px-6 lg:menu-normal md:block'>
      <img className='mx-auto mt-4 mb-8 h-16 w-auto' src={logo} />
      {NAV_LINKS.map(({ title, to }, index) => (
        <li className='border-md mb-4' key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'h-14 text-accent shadow-md' : 'h-14 shadow-md'
            }
            to={to}
            end
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar

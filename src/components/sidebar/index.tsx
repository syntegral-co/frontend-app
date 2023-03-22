import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/syntegral.png'

interface INavLink {
  title: string
  to: string
}

const NAV_LINKS: INavLink[] = [
  {
    title: 'Account',
    to: '',
  },
  {
    title: 'Discovery',
    to: '',
  },
  {
    title: 'Reporting',
    to: '',
  },
  {
    title: 'Download',
    to: '',
  },
  {
    title: 'Upload',
    to: '',
  },
]

function Sidebar() {
  return (
    <ul className='menu menu-compact hidden w-96 rounded-md bg-base-200 p-2 px-6 lg:menu-normal md:block'>
      <img className='mx-auto mt-4 mb-8 h-16 w-auto' src={logo} />
      {NAV_LINKS.map(({ title, to }, index) => (
        <li className='border-md mb-4' key={index}>
          <NavLink className='h-14 text-primary-content shadow-md' to={to} end>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar

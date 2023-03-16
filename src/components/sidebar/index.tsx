import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  {
    title: 'Account',
    to: 'companies/nike',
  },
  {
    title: 'Discovery',
    to: 'companies/nike/themes',
  },
  {
    title: 'Reporting',
    to: 'companies/nike/themes/planet',
  },
  {
    title: 'Download',
    to: '/download',
  },
  {
    title: 'Upload',
    to: '/upload',
  },
]

function Sidebar() {
  return (
    <ul className='menu rounded-box menu-compact hidden w-72 bg-base-200 p-2 lg:menu-normal md:block'>
      {NAV_LINKS.map(({ title, to }, index) => (
        <li className='hover-bordered' key={index}>
          <NavLink to={to} end>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar

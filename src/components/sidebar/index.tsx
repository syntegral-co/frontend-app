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
    <ul className='menu menu-compact hidden w-96 rounded-md bg-base-200 p-2 px-6 lg:menu-normal md:block'>
      <img className='mx-auto mt-4 mb-8 h-16 w-auto' src='/syntegral.png' />
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

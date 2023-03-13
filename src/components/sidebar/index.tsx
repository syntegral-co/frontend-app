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
]

function Sidebar() {
  return (
    <div className='sticky top-0 h-96 w-64 flex-none rounded-md bg-gray-800'>
      <div className='flex flex-col gap-2 p-4'>
        {NAV_LINKS.map(({ title, to }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-teal-600'
                : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            }
            end
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

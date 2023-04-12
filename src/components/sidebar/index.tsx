import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '../icon'
import { useCurrentCompany } from '../../pages/companies/hooks'

interface INavLink {
  title: string
  to: string
  icon?: string
  disabled?: boolean
}

function Sidebar() {
  const currentCompany = useCurrentCompany()

  const NAV_LINKS: INavLink[] = [
    {
      title: 'Discovery',
      to: '/',
      icon: 'compass',
    },
    {
      title: 'Chat',
      to: `/companies/${currentCompany?.id}`,
      icon: 'bubbles',
    },
    {
      title: 'Reporting',
      to: `/companies/${currentCompany?.id}/areas`,
      icon: 'pie',
    },
    {
      title: 'Download',
      to: '/test',
      icon: 'cloud-download',
      disabled: true,
    },
    {
      title: 'Upload',
      to: '/test',
      icon: 'cloud-upload',
      disabled: true,
    },
    {
      title: 'Account',
      to: '/account',
      icon: 'user',
      disabled: true,
    },
  ]

  return (
    <ul className="menu rounded-box self-start bg-base-200">
      {NAV_LINKS.map(({ to, title, icon, disabled }, index) => (
        <li key={index} className={classnames({ disabled: disabled })}>
          <div className="tooltip tooltip-right tooltip-primary" data-tip={title}>
            <NavLink
              className={({ isActive }) => (isActive ? 'h-14 text-accent shadow-md' : 'h-14 shadow-md')}
              to={to}
              end
            >
              <Icon icon={icon!} size={20} />
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar

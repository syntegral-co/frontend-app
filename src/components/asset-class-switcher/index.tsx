import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useUserRoles } from 'pages/assets/hooks'
import { NavbarLink } from 'components/nav/types'
import logo from 'assets/images/syntegral-white.png'
import equity from 'assets/images/trend.png'
import digital from 'assets/images/digital.png'
import real from 'assets/images/real-estate.png'

function AssetClassSwitcher() {
  const userRoles = useUserRoles()

  const ASSET_LINKS: NavbarLink[] = [
    {
      title: 'Equities',
      to: './classes/1',
      icon: equity,
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Demo_EQ'),
    },
    {
      title: 'Digital assets',
      to: './classes/2',
      icon: digital,
      disabled: true,
    },
    {
      title: 'Real estate',
      to: './classes/3',
      icon: real,
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Demo_RE'),
    },
  ]

  const assetLinksElement = ASSET_LINKS.map(({ title, to, disabled, icon }) => {
    return (
      <NavLink
        key={to}
        className={clsx({ 'pointer-events-none': disabled })}
        to={to}
      >
        <div className="relative flex flex-col items-center justify-center">
          {disabled ? (
            <div className="badge badge-accent absolute top-1/2 left-1/2 z-10 w-28 -translate-x-1/2 -translate-y-2/3 -rotate-12 opacity-75">
              Coming soon!
            </div>
          ) : null}
          <div className="mask mask-hexagon flex h-32 w-32 items-center justify-center bg-base-200 transition-transform hover:scale-105">
            <p className="text-3xl text-primary-content">
              <img className="h-auto w-16" src={icon} alt={title} />
            </p>
          </div>
          <p>{title}</p>
        </div>
      </NavLink>
    )
  })

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <img className="h-40" src={logo} alt="Syntegral logo" />
      <h1 className="py-6 text-2xl font-bold text-primary-content">
        Select what kind of asset you want to explore
      </h1>
      <div className="flex flex-row gap-4">{assetLinksElement}</div>
    </div>
  )
}

export default AssetClassSwitcher

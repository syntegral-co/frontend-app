import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useUserRoles } from 'pages/assets/hooks'
import { NavbarLink } from 'components/nav/types'
import logo from 'assets/images/syntegral-logo.webp'

function AssetClassSwitcher() {
  const userRoles = useUserRoles()

  const ASSET_LINKS: NavbarLink[] = [
    {
      title: 'Equities',
      to: './classes/1',
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Demo_EQ'),
    },
    {
      title: 'Real Estate',
      to: './classes/3',
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Demo_RE'),
    },
    {
      title: 'Green Certification',
      to: './classes/7',
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Ineria'),
    },
    {
      title: 'News Radar',
      to: './classes/8',
      disabled:
        !userRoles.includes('Sysadmin') && !userRoles.includes('Ineria'),
    },
  ]

  const assetLinksElement = ASSET_LINKS.map(({ title, to, disabled, icon }) => {
    return (
      <NavLink
        key={to}
        className={clsx({ 'pointer-events-none': disabled })}
        to={to}
      >
        <div className="relative flex flex-col items-center justify-start md:justify-center">
          <div className="group transition hover:drop-shadow-asset_class">
            <div
              className={clsx(
                'mask mask-hexagon flex h-28 w-28 items-center justify-center bg-base-200',
                {
                  'pointer-events-none opacity-40': disabled,
                },
              )}
            >
              <p className="text-5xl text-primary-content group-hover:text-accent">
                {title.charAt(0)}
              </p>
            </div>
          </div>
          <p>{title}</p>
        </div>
      </NavLink>
    )
  })

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center self-center md:h-full">
      <img
        className="h-52 w-auto"
        src={logo}
        alt="Syntegral logo"
        width="4167"
        height="4167"
      />
      <h1 className="py-6 text-center font-maven text-2xl font-bold text-teal md:text-3xl">
        Select to start exploring!
      </h1>
      <div className="flex flex-col gap-4 md:flex-row">{assetLinksElement}</div>
    </div>
  )
}

export default AssetClassSwitcher

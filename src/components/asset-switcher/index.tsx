import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { NavbarLink } from '../nav/types'
import logo from '/assets/images/syntegral-white.png'
import equity from '/assets/images/trend.png'
import digital from '/assets/images/digital.png'
import real from '/assets/images/real-estate.png'

const ASSET_LINKS: NavbarLink[] = [
  {
    title: 'Equities',
    to: './equities',
    icon: equity,
  },
  {
    title: 'Digital assets',
    to: './digital',
    disabled: true,
    icon: digital,
  },
  {
    title: 'Real estate',
    to: './real',
    disabled: true,
    icon: real,
  },
]

function AssetSwitcher() {
  const assetLinksElement = ASSET_LINKS.map(({ title, to, disabled, icon }) => {
    return (
      <NavLink
        key={to}
        className={classnames({ 'pointer-events-none': disabled })}
        to={to}
      >
        <div className="relative flex flex-col items-center justify-center">
          {disabled ? (
            <div className="badge-accent badge absolute top-1/2 left-1/2 z-10 w-28 -translate-x-1/2 -translate-y-2/3 -rotate-12 opacity-75">
              Coming soon!
            </div>
          ) : null}
          <div className="mask mask-hexagon flex h-32 w-32 items-center justify-center bg-base-200 transition-transform hover:scale-105">
            <p className="text-3xl text-primary-content">
              <img className="h-auto w-16" src={icon} />
            </p>
          </div>
          <p>{title}</p>
        </div>
      </NavLink>
    )
  })

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <img className="h-40" src={logo} />
      <h1 className="py-6 text-2xl font-bold text-primary-content">
        Select what kind of asset you want to explore
      </h1>
      <div className="flex flex-row gap-4">{assetLinksElement}</div>
    </div>
  )
}

export default AssetSwitcher

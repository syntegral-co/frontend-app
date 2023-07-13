import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useIsSwigcoUser, useIsSysadminUser } from '../../pages/assets/hooks'
import { useCurrentAssetClass } from '../asset-class-switcher/hooks'
import { AssetsState } from './atom'
import UserSession from '../../utils/session'
import { NavLink } from 'react-router-dom'
import { Asset } from '../../pages/assets/types'
import logo from '/assets/images/syntegral-white.png'

function isAssetInSearchTerm(asset: Asset, searchTerm: string): asset is Asset {
  return asset.name.toLowerCase().includes(searchTerm.toLowerCase())
}

function AssetSwitcher() {
  const [searchTerm, setSearchTerm] = useState('')
  const isSysadmin = useIsSysadminUser()
  const isSwigcoUser = useIsSwigcoUser()
  const currentAssetClass = useCurrentAssetClass()
  const assets = useRecoilValue(AssetsState)

  useEffect(() => {
    UserSession.reset()
  }, [UserSession])

  const welcomeText =
    currentAssetClass?.id === 3 ? (
      <>
        Welcome to your real asset due diligence portal. <br />
        Choose your asset to start.
      </>
    ) : (
      <>
        Welcome to the Nigerian stock exchange demo.
        <br />
        Choose an asset to start exploring!
      </>
    )

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <img className="h-40" src={logo} />
      <h2 className="py-6 text-center text-2xl font-bold text-primary-content">
        {welcomeText}
      </h2>
      <input
        type="text"
        placeholder="Start typing what you're looking for..."
        className="input-bordered input w-full max-w-xs text-primary-content"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm !== '' && (
        <ul className="menu w-full max-w-xs border border-base-200 bg-base-100 p-4 shadow-md">
          {assets
            .filter((asset: Asset) => {
              if (isSysadmin) {
                return true
              }

              if (isSwigcoUser) {
                return asset.id === 19
              }

              return asset.id !== 19
            })
            .filter(
              (asset: Asset) =>
                asset.assetClassId === currentAssetClass!.id &&
                isAssetInSearchTerm(asset, searchTerm),
            )
            .map((asset: Asset) => (
              <li
                key={asset.id}
                className="text-primary-content hover:text-accent"
              >
                <NavLink className="flex" to={`./assets/${asset.id}/themes`}>
                  {asset.name}
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default AssetSwitcher

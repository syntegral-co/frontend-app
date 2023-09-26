import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
  useIsIneriaUser,
  useIsSwigcoUser,
  useIsSysadminUser,
} from 'pages/assets/hooks'
import { Asset } from 'pages/assets/types'
import { useCurrentAssetClass } from 'components/asset-class-switcher/hooks'
import { AssetsState } from './atom'
import { isSearchTermAnAsset } from 'utils/helpers'
import UserSession from 'utils/session'
import logo from 'assets/images/syntegral-white.png'

function AssetSwitcher() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isInputFocus, setIsInputFocus] = useState(false)
  const isSysadmin = useIsSysadminUser()
  const isSwigcoUser = useIsSwigcoUser()
  const isIneriaUser = useIsIneriaUser()
  const currentAssetClass = useCurrentAssetClass()
  const assets = useRecoilValue(AssetsState)

  useEffect(() => {
    UserSession.reset()
  }, [UserSession])

  let welcomeText

  switch (currentAssetClass!.id) {
    case 6:
      welcomeText = (
        <>
          Welcome to the News Radar.
          <br /> Enter a standard to start.
        </>
      )
      break

    case 5:
    case 4:
    case 7:
      welcomeText = (
        <>
          Welcome to the INERIA demo assessment. <br />
          Choose your asset to start.
        </>
      )
      break

    case 3:
      welcomeText = (
        <>
          Welcome to your real asset due diligence portal. <br />
          Choose your asset to start.
        </>
      )
      break

    case 2:
    case 1:
      welcomeText = (
        <>
          Welcome to the Nigerian stock exchange demo.
          <br />
          Choose an asset to start exploring!
        </>
      )
      break

    default:
      currentAssetClass!.id satisfies never
  }

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <img className="h-40" src={logo} alt="Syntegral logo" />
      <h2 className="py-6 text-center text-2xl font-bold font-conthax text-primary-content">
        {welcomeText}
      </h2>
      <div className="relative w-full flex flex-col items-center justify-start">
        <input
          type="text"
          placeholder="Start typing what you're looking for..."
          className="input-bordered input w-full h-12 max-w-xs text-primary-content"
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {(searchTerm !== '' || isInputFocus) && (
          <ul
            className="menu w-full max-w-xs border border-base-200 bg-base-100 p-4 shadow-md"
            onMouseDown={(event) => event.preventDefault()}
          >
            {assets
              .filter((asset: Asset) => {
                if (isSysadmin) {
                  return true
                }

                if (isSwigcoUser) {
                  return asset.id === 19
                }

                if (isIneriaUser) {
                  return asset.id !== 26
                }

                return asset.id !== 19
              })
              .filter((asset: Asset) => {
                if (isInputFocus && searchTerm === '')
                  return asset.assetClassId === currentAssetClass!.id

                return (
                  asset.assetClassId === currentAssetClass!.id &&
                  isSearchTermAnAsset(asset, searchTerm)
                )
              })
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
    </div>
  )
}

export default AssetSwitcher

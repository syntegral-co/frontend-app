import { matchPath, useLocation, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useRecoilValue } from 'recoil'
import { AssetsState } from '../../components/asset-switcher/atom'
import { Asset } from './types'

export function useCurrentAsset() {
  const assets = useRecoilValue(AssetsState)
  const { asset } = useParams()

  if (!asset) return null

  return assets.find((c: Asset) => c.id === parseInt(asset)) as Asset
}

export function useIsSwigcoDemo(isRoot = true) {
  const { user } = useAuth0()

  if (!user) return false

  return user.email === import.meta.env.VITE_SWIGCO_USER_EMAIL
}

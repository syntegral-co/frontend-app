import { matchPath, useLocation, useParams } from 'react-router-dom'
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
  const { pathname } = useLocation()
  const pattern = isRoot ? 'swigco' : 'swigco/*'
  const isSwigcoDemo = matchPath(pattern, pathname) !== null

  return isSwigcoDemo
}

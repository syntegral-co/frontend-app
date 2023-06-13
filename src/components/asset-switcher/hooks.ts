import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import { assetsState } from './atom'

export function useCurrentAsset() {
  const assets = useRecoilValue(assetsState)
  const { asset: assetParam } = useParams()

  if (!assetParam) return null

  return assets.find((asset) => asset.id === parseInt(assetParam))
}

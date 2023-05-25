import { useParams } from 'react-router-dom'

export function useCurrentAsset() {
  const { asset } = useParams()

  if (!asset) return null

  return asset
}

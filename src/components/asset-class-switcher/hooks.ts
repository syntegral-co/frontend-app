import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import { assetClassesState } from './atom'

export function useCurrentAssetClass() {
  const assetClasses = useRecoilValue(assetClassesState)
  const { class: assetClassParam } = useParams()

  if (!assetClassParam) return null

  return assetClasses.find(
    (assetClass) => assetClass.id === parseInt(assetClassParam),
  )
}

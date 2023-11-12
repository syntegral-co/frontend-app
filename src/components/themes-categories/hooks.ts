import { useCurrentAssetClass } from 'components/asset-class-switcher/hooks'
import { useRecoilValue } from 'recoil'
import { categoriesState } from 'components/themes-toggles/atoms'
import { useSearchParams } from 'react-router-dom'

export function useCurrentCategory() {
  const currentAssetClass = useCurrentAssetClass()
  const categories = useRecoilValue(categoriesState)
  const [params] = useSearchParams()

  const defaultCategory = currentAssetClass!.id === 7 ? 5 : 8

  const currentCategoryId = parseInt(params.get('category') as string) || defaultCategory
  const currentCategory = categories.find(
    (category) => category.id === currentCategoryId,
  )

  return currentCategory
}

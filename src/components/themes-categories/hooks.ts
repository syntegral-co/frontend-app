import { useRecoilValue } from 'recoil'
import { categoriesState } from 'components/themes-toggles/atoms'
import { useSearchParams } from 'react-router-dom'

export function useCurrentCategory() {
  const categories = useRecoilValue(categoriesState)
  const [params] = useSearchParams()

  const currentCategoryId = parseInt(params.get('category') as string) || 5
  const currentCategory = categories.find(
    (category) => category.id === currentCategoryId,
  )

  return currentCategory
}

import { categories } from './types'
import { useParams } from 'react-router-dom'

export function useCategories() {
  return Object.values(categories).map((theme) => theme)
}

export function useCurrentCategory() {
  const { category: currentCategory } = useParams()

  if (!currentCategory) return null

  return Object.values(categories).find(
    (category) => category.id.toString() === currentCategory,
  )
}

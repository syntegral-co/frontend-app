import { useParams } from 'react-router-dom'
import { useCurrentCategory } from '../hooks'

export function useCurrentTheme() {
  const currentCategory = useCurrentCategory()
  const { theme: currentTheme } = useParams()

  if (!currentCategory || !currentTheme) return null

  return currentCategory.themes!.find(
    (theme) => theme.id === parseInt(currentTheme),
  )
}

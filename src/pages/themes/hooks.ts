import { useParams } from 'react-router-dom'
import { themes } from './types'

export function useThemes() {
  return Object.values(themes).map((theme) => theme)
}

export function useCurrentTheme() {
  const { theme: themeParam } = useParams()

  if (!themeParam) return Object.values(themes).find((theme) => theme.id === 'people')

  return Object.values(themes).find((theme) => theme.id === themeParam)
}

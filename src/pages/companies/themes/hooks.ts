import { themes } from './types'
import { useParams } from 'react-router-dom'

export function useThemes() {
  return Object.values(themes).map((theme) => theme)
}

export function useCurrentTheme() {
  const { theme: currentTheme } = useParams()

  if (!currentTheme) return null

  return Object.values(themes).find(
    (theme) => theme.id.toString() === currentTheme,
  )
}

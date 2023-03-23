import { Themes } from './types'

export function useThemes() {
  const themes = Object.values(Themes).map((theme) => theme)
  return themes
}

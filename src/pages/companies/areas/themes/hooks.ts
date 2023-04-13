import { useRecoilValue } from 'recoil'
import { themeState } from '../../../../components/company-switcher/atom'
import { themes } from './types'

export function useThemes() {
  return Object.values(themes).map((theme) => theme)
}

export function useCurrentTheme() {
  const currentTheme = useRecoilValue(themeState)

  if (!currentTheme) return null

  return Object.values(themes).find((theme) => theme.id === currentTheme)
}

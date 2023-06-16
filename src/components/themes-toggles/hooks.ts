import { useCurrentAssetClass } from '../asset-class-switcher/hooks'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedThemesState, themesScoresState, themesState } from './atoms'

export function useThemes() {
  const currentAssetClass = useCurrentAssetClass()
  const allThemes = useRecoilValue(themesState)
  const scores = useRecoilValue(themesScoresState)
  const [selectedThemes, setSelectedThemeState] =
    useRecoilState(selectedThemesState)

  const themes = allThemes.filter(
    (theme) => theme.assetClassId === currentAssetClass!.id,
  )

  return { themes, scores, selectedThemes, toggleThemes: setSelectedThemeState }
}

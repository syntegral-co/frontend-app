import { useCurrentAsset } from '../asset-switcher/hooks'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedThemesState, themesScoresState, themesState } from './atoms'

export function useThemes() {
  const currentAsset = useCurrentAsset()
  const allThemes = useRecoilValue(themesState)
  const scores = useRecoilValue(themesScoresState)
  const [selectedThemes, setSelectedThemeState] =
    useRecoilState(selectedThemesState)

  const themes = allThemes.filter((theme) => theme.assetId === currentAsset!.id)

  return { themes, scores, selectedThemes, toggleThemes: setSelectedThemeState }
}

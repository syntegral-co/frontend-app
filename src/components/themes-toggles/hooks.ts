import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedThemesState, themesScoresState, themesState } from './atoms'

export function useThemes() {
  let themes = useRecoilValue(themesState)
  const scores = useRecoilValue(themesScoresState)
  const [selectedThemes, setSelectedThemeState] =
    useRecoilState(selectedThemesState)

  return { themes, scores, selectedThemes, toggleThemes: setSelectedThemeState }
}

import { useRecoilValue } from 'recoil'
import { themesState } from '../../../components/themes-toggles/atoms'
import { useParams } from 'react-router-dom'
import { Theme } from '../types'

export function useCurrentTheme() {
  let themes = useRecoilValue(themesState)
  const { theme: currentTheme } = useParams()

  if (!currentTheme) return null

  return themes.find((theme: Theme) => theme.id === parseInt(currentTheme))
}

import { useRecoilValue } from 'recoil'
import { themesState } from '../../../components/themes-toggles/atoms'
import { viewModeState } from '../../../components/view-selector/atom'
import { useParams } from 'react-router-dom'
import { useCurrentAssetClass } from '../../../components/asset-class-switcher/hooks'
import { ViewMode } from '../../../components/view-selector/types'

export function useCurrentTheme() {
  let themes = useRecoilValue(themesState)
  const { theme: currentTheme } = useParams()

  if (!currentTheme) return null

  return themes.find((theme) => theme.id === parseInt(currentTheme))
}

export function useCurrentViewMode() {
  const viewMode = useRecoilValue(viewModeState)
  const currentAssetClass = useCurrentAssetClass()

  return currentAssetClass!.id === 5 ? 'satellite' : (viewMode as ViewMode)
}

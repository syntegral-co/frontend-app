import { useParams } from 'react-router-dom'
import { useCurrentTheme } from '../../hooks'

export function useCurrentImpactArea() {
  const currentTheme = useCurrentTheme()
  const { area: impactArea } = useParams()

  if (!currentTheme || !impactArea) return null

  return currentTheme.impactAreas!.find(
    (area) => area.id === parseInt(impactArea),
  )
}

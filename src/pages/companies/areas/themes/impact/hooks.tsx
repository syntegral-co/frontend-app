import { useParams } from 'react-router-dom'
import {
  peopleImpactAreas,
  planetImpactAreas,
  profitImpactAreas,
} from '../../types'
import { useCurrentTheme } from '../hooks'

export function useCurrentImpactArea() {
  const currentTheme = useCurrentTheme()
  const { impactArea } = useParams()

  if (!currentTheme || !impactArea) return null

  return currentTheme.impactAreas!.find(
    (area) => area.id === parseInt(impactArea),
  )
}

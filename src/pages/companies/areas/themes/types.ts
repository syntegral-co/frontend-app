import {
  ImpactArea,
  peopleImpactAreas,
  planetImpactAreas,
  profitImpactAreas,
} from '../types'

type ThemeName = 'People' | 'Profit' | 'Planet'
export interface ITheme {
  id: string
  name: ThemeName
  impactAreas?: ImpactArea[]
}

export const themes: Record<ThemeName, ITheme> = {
  People: { id: 'people', name: 'People', impactAreas: peopleImpactAreas },
  Profit: { id: 'profit', name: 'Profit', impactAreas: profitImpactAreas },
  Planet: { id: 'planet', name: 'Planet', impactAreas: planetImpactAreas },
}

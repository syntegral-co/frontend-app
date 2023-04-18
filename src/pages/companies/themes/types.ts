import {
  ImpactArea,
  peopleImpactAreas,
  planetImpactAreas,
  profitImpactAreas,
} from './areas/types'

type ThemeName = 'People' | 'Profit' | 'Planet'
export interface Theme {
  id: number
  name: ThemeName
  impactAreas?: ImpactArea[]
  icon: string
}

export const themes: Record<ThemeName, Theme> = {
  People: {
    id: 1,
    name: 'People',
    impactAreas: peopleImpactAreas,
    icon: 'people',
  },
  Profit: {
    id: 2,
    name: 'Profit',
    impactAreas: profitImpactAreas,
    icon: 'profit',
  },
  Planet: {
    id: 3,
    name: 'Planet',
    impactAreas: planetImpactAreas,
    icon: 'planet',
  },
}

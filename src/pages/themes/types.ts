import { ImpactArea, peopleImpactAreas } from '../areas/types'

type ThemeName = 'Purpose' | 'People' | 'Profit' | 'Planet'
export interface ITheme {
  id: string
  name: ThemeName
  impactAreas?: ImpactArea[]
}

export const themes: Record<ThemeName, ITheme> = {
  Purpose: { id: 'purpose', name: 'Purpose' },
  People: { id: 'people', name: 'People', impactAreas: peopleImpactAreas },
  Profit: { id: 'profit', name: 'Profit' },
  Planet: { id: 'planet', name: 'Planet' },
}

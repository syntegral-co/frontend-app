import { Theme, peopleThemes, planetThemes, profitThemes } from './themes/types'

type CategoryName = 'People' | 'Profit' | 'Planet'

export interface Category {
  id: number
  name: CategoryName
  themes?: Theme[]
  icon: string
}

export const categories: Record<CategoryName, Category> = {
  People: {
    id: 1,
    name: 'People',
    themes: peopleThemes,
    icon: 'people',
  },
  Profit: {
    id: 2,
    name: 'Profit',
    themes: profitThemes,
    icon: 'profit',
  },
  Planet: {
    id: 3,
    name: 'Planet',
    themes: planetThemes,
    icon: 'planet',
  },
}

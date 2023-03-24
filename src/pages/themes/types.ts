type ThemeName = 'Purpose' | 'People' | 'Profit' | 'Planet'
export interface ImpactArea {
  id: string
  name: string
}
export interface ITheme {
  id: string
  name: ThemeName
  impactAreas?: ImpactArea[]
}

export const peopleImpactAreas: ImpactArea[] = [
  { id: 'food-and-security', name: 'Food Security' },
  { id: 'education-and-child-care', name: 'Education and Child Care' },
  { id: 'womens-empowerment', name: "Women's Empowerment" },
  { id: 'affordable-housing', name: 'Affordable Housing' },
  { id: 'income-and-work', name: 'Income and Work' },
  { id: 'access-to-energy', name: 'Access to Energy' },
  { id: 'youth-empowerment', name: 'Youth Empowerment' },
  { id: 'lgbtq-empowerment', name: 'LGBTQ+ Empowerment' },
]

export const themes: Record<ThemeName, ITheme> = {
  Purpose: { id: 'purpose', name: 'Purpose' },
  People: { id: 'people', name: 'People', impactAreas: peopleImpactAreas },
  Profit: { id: 'profit', name: 'Profit' },
  Planet: { id: 'planet', name: 'Planet' },
}

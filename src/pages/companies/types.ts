interface ICompanyTheme {
  score: number
  impactAreas?: Record<string, number>
}
export interface ICompany {
  id: number
  name: string
  logo?: string
  themes?: Record<string, ICompanyTheme>
}

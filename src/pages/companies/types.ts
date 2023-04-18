interface CompanyTheme {
  score: number
  impactAreas?: Record<string, number>
}
export interface Company {
  id: number
  name: string
  logo?: string
  themes?: Record<string, CompanyTheme>
}

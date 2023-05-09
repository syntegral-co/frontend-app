export type Company = {
  id: number
  name: string
}

export type Category = {
  id: number
  name: string
}

export type Theme = {
  id: number
  categoryId: number
  name: string
  definition: string
}

export type ThemeScore = {
  companyId: number
  themeId: number
  score: number
}

export type QA = {
  id: number
  companyId: number
  themeId: number
  question: string
  answer: string
}

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
  categoryId: Pick<Category, 'id'>
  name: string
  definition: string
}

export type ThemeScore = {
  companyId: number
  themeId: Pick<Theme, 'id'>
  score: number
}

export type QA = {
  id: number
  companyId: Pick<Category, 'id'>
  themeId: Pick<Theme, 'id'>
  question: string
  answer: string
}

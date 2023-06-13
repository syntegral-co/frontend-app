import { Asset } from '../../components/asset-switcher/types'

export type Company = {
  id: number
  assetId: Asset['id']
  name: string
}

export type Category = {
  id: number
  name: string
}

export type Theme = {
  id: number
  assetId: Asset['id']
  categoryId: Category['id']
  name: string
  definition: string
}

export type ThemeScore = {
  companyId: number
  themeId: Theme['id']
  score: number
}

export type QA = {
  id: number
  companyId: Company['id']
  themeId: Theme['id']
  question: string
  answer: string
}

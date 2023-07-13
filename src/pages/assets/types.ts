import { AssetClass } from '../../components/asset-class-switcher/types'

export type UserRole = string

export type Asset = {
  id: number
  assetClassId: AssetClass['id']
  name: string
}

export type Category = {
  id: number
  name: string
}

export type Theme = {
  id: number
  assetClassId: AssetClass['id']
  categoryId: Category['id']
  name: string
  definition: string
}

export type ThemeScore = {
  assetId: Asset['id']
  themeId: Theme['id']
  score: number
}

export type QA = {
  id: number
  assetId: Asset['id']
  themeId: Theme['id']
  question: string
  answer: string
  references?: string[]
}

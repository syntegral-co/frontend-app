import { AssetClass } from 'components/asset-class-switcher/types'

export type UserRole = 'Sysadmin' | 'SwigCo' | 'Ineria' | 'Demo_EQ' | 'Demo_RE'

export type Asset = {
  id: number
  assetClassId: AssetClass['id']
  name: string
}

export type Category = {
  id: number
  name: string
  newsData: string
}

export type ThemeNewsData = {
  url: string
  imageUrl: string
  title: string
  description: string
}

export type Theme = {
  id: number
  assetClassId: AssetClass['id']
  categoryId: Category['id']
  name: string
  definition: string
  newsData: ThemeNewsData[]
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
  references?: string[][]
}

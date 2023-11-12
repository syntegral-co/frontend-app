import { FetchStatus } from '@tanstack/react-query'

export type References = string[][] | undefined

export type ThemeSummary = {
  summary: string
  references: References
}

export type ThemeSummaryRequest = {
  data: ThemeSummary | undefined
  fetchStatus: FetchStatus
}

export type ThemeNewsReference = {
  id?: string
  url: string
  title: string
  description?: string
  img_url?: string
  query_string?: string
}

export type ThemeNews = {
  summary: string
  references: ThemeNewsReference[] | undefined
}

export type ThemeNewsRequest = {
  data: ThemeNews | undefined
  fetchStatus: FetchStatus
}

export type NewsDocuments = {
  gsUri: string
  page: number
  title: string
}

export type NewsRadarReference = {
  articles: string[][]
  documents: string[][]
}

export type NewsRadarNews = {
  summary: string
  references: NewsRadarReference
}

export type NewsRadarRequest = {
  data: NewsRadarNews | undefined
  fetchStatus: FetchStatus
}

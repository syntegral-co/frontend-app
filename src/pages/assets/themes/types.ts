import { FetchStatus } from '@tanstack/react-query'

export type ThemeSummary = {
  summary: string
  references: string[][] | undefined
}

export type ThemeSummaryRequest = {
  data: ThemeSummary | undefined
  fetchStatus: FetchStatus
}

export type ThemeNewsReference = {
  id: string
  url: string
  title: string
  description: string
  img_url: string
  query_string: string
}

export type ThemeNews = {
  summary: string
  references: ThemeNewsReference[] | undefined
}

export type ThemeNewsRequest = {
  data: ThemeNews | undefined
  fetchStatus: FetchStatus
}

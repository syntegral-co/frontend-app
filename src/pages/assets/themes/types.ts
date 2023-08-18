import { FetchStatus } from '@tanstack/react-query'

export type ThemeSummaryRequest = {
  data: ThemeSummary | undefined
  fetchStatus: FetchStatus
}

export type ThemeSummary = {
  summary: string
  references: string[][] | undefined
}

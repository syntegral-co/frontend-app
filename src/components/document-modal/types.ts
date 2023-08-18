import {
  FetchStatus,
  QueryObserverResult,
  QueryStatus,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'

export type DocumentRequest = {
  status: QueryStatus
  data: Document | undefined
  fetchStatus: FetchStatus
}

export type Document = {
  [id: DocumentLink['id']]: URL
}

export type DocumentLink = {
  id: string
  page: string
  name: string
}

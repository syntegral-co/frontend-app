import { QueryStatus } from '@tanstack/react-query'

export type ChatRequest = {
  status: QueryStatus
  data: ChatReply | undefined
}

export type ChatReply = {
  status: 'successful' | 'unsuccessful'
  answer: string
  categories: string
  references: {
    list: string[][]
    text: string
  }
}

export type Document = {
  id: string | null
  pageId: string | null
  url?: string
}

export interface ChatReply {
  status: 'successful' | 'unsuccessful'
  answer: string
  categories: string
  references: {
    list: string[][]
    text: string
  }
}

export interface Document {
  id: string | null
  pageId: string | null
  url?: string
}

export interface IChatReply {
  status: 'successful' | 'unsuccessful'
  answer: string
  categories: string
  references: {
    list: string[][]
    text: string
  }
}

export interface IDocument {
  id: string | null
  pageId: string | null
  url?: string
}

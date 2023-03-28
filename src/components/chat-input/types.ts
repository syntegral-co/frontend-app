export interface IChatReply {
  answer: string
  categories: string
  references: {
    list: number[]
    text: string
  }
}

export interface IChatContextReply {
  context_answer: string
  context_references: {
    list: number[]
    text: string
  }
}

export interface IChatReply {
  answer: string
  categories: string
  references: {
    list: number[]
    text: string
  }
}

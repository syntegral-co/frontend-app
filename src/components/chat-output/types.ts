export interface IChatMessageLink {
  id: string
  page: string
  name: string
}

export interface IChatMessage {
  header?: string
  author: string
  text: string
  links?: IChatMessageLink[]
}

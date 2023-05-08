import { DocumentLink } from '../drawer/types'
export type ChatMessage = {
  header?: string
  author: string
  text: string
  links?: DocumentLink[]
  collapsible?: boolean
}

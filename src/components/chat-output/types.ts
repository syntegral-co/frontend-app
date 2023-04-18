import { DocumentLink } from '../drawer/types'
export interface ChatMessage {
  header?: string
  author: string
  text: string
  links?: DocumentLink[]
  collapsible?: boolean
}

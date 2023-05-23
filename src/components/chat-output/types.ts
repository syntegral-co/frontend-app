import { DocumentLink } from '../document-modal/types'
export type ChatMessage = {
  header?: string
  author: string
  text: string
  links?: DocumentLink[]
  collapsible?: boolean
}

import { IDocumentLink } from '../drawer/types'
export interface IChatMessage {
  header?: string
  author: string
  text: string
  links?: IDocumentLink[]
  collapsible?: boolean
}

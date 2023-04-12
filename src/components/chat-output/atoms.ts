import { atom } from 'recoil'
import { IChatMessageLink } from './types'

export const documentState = atom({
  key: 'document',
  default: null as IChatMessageLink | null,
})

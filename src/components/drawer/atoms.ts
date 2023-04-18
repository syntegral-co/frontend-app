import { atom } from 'recoil'
import { DocumentLink } from './types'

export const documentState = atom({
  key: 'document',
  default: null as DocumentLink | null,
})

export const drawerState = atom({
  key: 'drawer',
  default: false,
})

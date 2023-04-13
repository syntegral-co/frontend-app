import { atom } from 'recoil'
import { IDocumentLink } from './types'

export const documentState = atom({
  key: 'document',
  default: null as IDocumentLink | null,
})

export const drawerState = atom({
  key: 'drawer',
  default: false,
})

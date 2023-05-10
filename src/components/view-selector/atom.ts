import { atom } from 'recoil'
import { ViewMode } from './types'

export const viewModeState = atom({
  key: 'view-mode',
  default: 'list' as ViewMode,
})

import { atom } from 'recoil'
import { themes } from '../pages/themes/types'

export const themesState = atom({
  key: 'themes',
  default: Object.values(themes).map((theme) => theme),
})

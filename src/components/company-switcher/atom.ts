import { atom } from 'recoil'
import { themes } from '../../pages/companies/areas/themes/types'

export const themeState = atom({
  key: 'themeState',
  default: Object.values(themes)[0].id,
})

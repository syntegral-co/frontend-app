import { atom } from 'recoil'
import {
  profitThemes,
  peopleThemes,
  planetThemes,
} from '../../pages/companies/categories/themes/types'

const themes = [...planetThemes, ...peopleThemes, ...profitThemes].map(
  (theme) => ({
    id: theme.id,
    name: theme.name,
    checked: false,
  }),
)

export const themesState = atom({
  key: 'themes',
  default: themes,
})

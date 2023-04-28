import { atom, selector } from 'recoil'
import { getCategories, getThemes, getThemesScores } from '../../utils/api'

export const categoriesState = selector({
  key: 'categories',
  get: async () => {
    const response = await getCategories()

    if (!response.data) {
      return []
    }

    return response.data.map((category: any) => ({
      id: category[0],
      name: category[1],
    }))
  },
})

export const themesState = selector({
  key: 'themes',
  get: async () => {
    const response = await getThemes()

    if (!response.data) {
      return []
    }

    return response.data.map((theme: any) => ({
      id: theme[0],
      categoryId: theme[1],
      name: theme[2],
      definition: theme[3],
    }))
  },
})

export const selectedThemesState = atom({
  key: 'selected-themes',
  default: [] as number[],
})

export const themesScoresState = selector({
  key: 'scores',
  get: async () => {
    const response = await getThemesScores()

    if (!response.data) {
      return []
    }

    return response.data.map((score: any) => ({
      companyId: score[0],
      themeId: score[1],
      score: score[2],
    }))
  },
})

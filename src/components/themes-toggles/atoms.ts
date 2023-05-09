import { atom, selector } from 'recoil'
import {
  getCategories,
  getThemesQA,
  getThemes,
  getThemesScores,
} from '../../utils/api'
import { Category, QA, Theme, ThemeScore } from '../../pages/companies/types'

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
    })) as Category[]
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
    })) as Theme[]
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
    })) as ThemeScore[]
  },
})

export const qaState = selector({
  key: 'q_and_a',
  get: async () => {
    const response = await getThemesQA()

    if (!response.data) {
      return []
    }

    return response.data.map((question: any) => ({
      id: question[0],
      companyId: question[1],
      themeId: question[2],
      question: question[3],
      answer: question[4],
    })) as QA[]
  },
})

import { atom, selector } from 'recoil'
import {
  getCategories,
  getThemesQA,
  getThemes,
  getThemesScores,
} from '../../utils/api'
import { Category, QA, Theme, ThemeScore } from '../../pages/assets/types'

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
      assetId: theme[1],
      categoryId: theme[2],
      name: theme[3],
      definition: theme[4],
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
      id: score[0],
      assetId: score[1],
      themeId: score[2],
      score: score[3],
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
      themeId: question[1],
      assetId: question[2],
      question: question[3],
      answer: question[4],
      references: question[5],
    })) as QA[]
  },
})

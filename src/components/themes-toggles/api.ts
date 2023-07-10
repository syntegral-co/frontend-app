import { callAPI } from '../../utils/api'

export async function getCategories() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/category`
  const data = await callAPI(APIUrl, {
    type: 'category',
  })

  return data
}

export async function getThemes() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/theme`
  const data = await callAPI(APIUrl, {
    type: 'theme',
  })

  return data
}

export async function getThemesScores() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/theme_score`
  const data = await callAPI(APIUrl, {
    type: 'theme_score',
  })

  return data
}

export async function getThemesQA() {
  const APIUrl = `${
    import.meta.env.VITE_IMPACT_API_BASEPATH
  }/theme_question_answer`
  const data = await callAPI(APIUrl, {
    type: 'theme_q_and_a',
  })

  return data
}

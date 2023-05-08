import Mixpanel from './tracking'

const sessionId = localStorage.getItem('sessionId')

type AnalyticsOptions = {
  [key: string]: string
}

async function callAPI(endpoint: string, analyticsOptions?: AnalyticsOptions) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        authorization: import.meta.env.VITE_API_KEY,
        session: sessionId!,
      },
    })

    const data = await response.json()

    if (analyticsOptions) {
      Mixpanel.track('API Call', analyticsOptions)
    }

    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('There was a SyntaxError', error)
    } else {
      console.log('There was an error', error)
    }
  }
}

export async function chat(message: string, companyId: number) {
  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot?question=${message}&company_id=${companyId}`
  const data = await callAPI(APIUrl, {
    type: 'chatbot',
    question: message,
    companyId: companyId.toString(),
  })

  return data
}

export async function getChatContext(message: string, answer: string) {
  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot_context?question=${message}&answer=${answer}`
  const data = await callAPI(APIUrl, {
    type: 'chatbot_context',
    question: message,
    answer: answer,
  })

  return data
}

export async function getChatMetrics(
  metric: 'iris' | 'sdg' | 'all',
  answer: string,
) {
  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot_metrics?metric=${metric}&answer=${answer}`
  const data = await callAPI(APIUrl, {
    type: 'chatbot_metrics',
    metric: metric,
    answer: answer,
  })

  return data
}

export async function getCompanies() {
  const APIUrl = `${import.meta.env.VITE_THEMES_API_BASEPATH}/company`
  const data = await callAPI(APIUrl, {
    type: 'company',
  })

  return data
}

export async function getCategories() {
  const APIUrl = `${import.meta.env.VITE_THEMES_API_BASEPATH}/category`
  const data = await callAPI(APIUrl, {
    type: 'category',
  })

  return data
}

export async function getThemes() {
  const APIUrl = `${import.meta.env.VITE_THEMES_API_BASEPATH}/theme`
  const data = await callAPI(APIUrl, {
    type: 'theme',
  })

  return data
}

export async function getThemesScores() {
  const APIUrl = `${import.meta.env.VITE_THEMES_API_BASEPATH}/theme_score`
  const data = await callAPI(APIUrl, {
    type: 'theme_score',
  })

  return data
}

export async function getThemeSummary(companyId: number, themeId: number) {
  const APIUrl = `${
    import.meta.env.VITE_THEMES_API_BASEPATH
  }/theme_summary?company_id=${companyId}&theme_id=${themeId}`
  const data = await callAPI(APIUrl, {
    type: 'theme_summary',
    companyId: companyId.toString(),
    themeId: themeId.toString(),
  })

  return data
}

export async function getThemeQA() {
  const APIUrl = `${import.meta.env.VITE_THEMES_API_BASEPATH}/theme_q_and_a`
  const data = await callAPI(APIUrl, {
    type: 'theme_q_and_a',
  })

  return data
}

export async function getDocument(filenameId: string, minutes: number) {
  Mixpanel.track('API Call', { type: 'doc_url', filenameId: filenameId })

  const APIUrl = `${
    import.meta.env.VITE_DOC_API_BASEPATH
  }/doc-url?filename_id=${filenameId}&minutes=${minutes}`
  const data = await callAPI(APIUrl)

  return data
}

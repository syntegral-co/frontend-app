import UserSession from './session'
import Mixpanel from './tracking'

const sessionId = UserSession.get()

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

export async function chat(message: string, assetId: number) {
  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot?question=${message}&asset_id=${assetId}`
  const data = await callAPI(APIUrl, {
    type: 'chatbot',
    question: message,
    assetId: assetId.toString(),
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

export async function getAssets() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/asset`
  const data = await callAPI(APIUrl, {
    type: 'asset',
  })

  return data
}

export async function getAssetClasses() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/asset_class`
  const data = await callAPI(APIUrl, {
    type: 'asset_class',
  })

  return data
}

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

export async function getThemeSummary(assetId: number, themeId: number) {
  const APIUrl = `${
    import.meta.env.VITE_IMPACT_API_BASEPATH
  }/theme_summary?asset_id=${assetId}&theme_id=${themeId}`
  const data = await callAPI(APIUrl, {
    type: 'theme_summary',
    assetId: assetId.toString(),
    themeId: themeId.toString(),
  })

  return data
}

export async function getMetrics() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/metric`
  const data = await callAPI(APIUrl, {
    type: 'metric',
  })

  return data
}

export async function getMetricsAnswers() {
  const APIUrl = `${
    import.meta.env.VITE_IMPACT_API_BASEPATH
  }/theme_metric_answer`
  const data = await callAPI(APIUrl, {
    type: 'theme_metric_answer',
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

export async function getDocument(filenameId: string, minutes: number) {
  Mixpanel.track('API Call', { type: 'doc_url', filenameId: filenameId })

  const APIUrl = `${
    import.meta.env.VITE_DOC_API_BASEPATH
  }/doc-url?filename_id=${filenameId}&minutes=${minutes}`
  const data = await callAPI(APIUrl)

  return data
}

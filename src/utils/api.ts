import Mixpanel from './tracking'

const sessionId = localStorage.getItem('sessionId')

interface AnalyticsOptions {
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

export async function getThemeSummary(companyId: number, theme: string) {
  const APIUrl = `${
    import.meta.env.VITE_SUMMARY_API_BASEPATH
  }/theme_summary?company_id=${companyId}&theme=${theme}`
  const data = await callAPI(APIUrl, {
    type: 'theme_summary',
    companyId: companyId.toString(),
    theme,
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

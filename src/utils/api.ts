import Mixpanel from './tracking'

const sessionId = localStorage.getItem('sessionId')

async function callAPI(endpoint: string) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        authorization: import.meta.env.VITE_API_KEY,
        session: sessionId!,
      },
    })

    const data = await response.json()
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
  Mixpanel.track('API Call', {
    type: 'chatbot',
    question: message,
    companyId: companyId,
  })

  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot?question=${message}&company_id=${companyId}`
  const data = await callAPI(APIUrl)

  return data
}

export async function chatContext(message: string, answer: string) {
  Mixpanel.track('API Call', {
    type: 'chatbot_context',
    question: message,
    answer: answer,
  })

  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot_context?question=${message}&answer=${answer}`
  const data = await callAPI(APIUrl)

  return data
}

export async function chatMetrics(
  metric: 'iris' | 'sdg' | 'all',
  answer: string,
) {
  Mixpanel.track('API Call', {
    type: 'chatbot_metrics',
    metric: metric,
    answer: answer,
  })

  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/chatbot_metrics?metric=${metric}&answer=${answer}`
  const data = await callAPI(APIUrl)

  return data
}

export async function getImpactSummary(companyId: number, theme: string) {
  Mixpanel.track('API Call', {
    type: 'impact_summary',
    company_id: companyId,
    theme: theme,
  })

  const APIUrl = `${
    import.meta.env.VITE_CHATBOT_API_BASEPATH
  }/impact_summary?company_id=${companyId}&theme=${theme}`
  const data = await callAPI(APIUrl)

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

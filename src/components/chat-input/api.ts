import { callAPI } from '../../utils/api'

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

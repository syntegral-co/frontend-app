import { callAPI } from '../../utils/api'

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

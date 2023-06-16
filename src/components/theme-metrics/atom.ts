import { selector } from 'recoil'
import { getMetrics, getMetricsAnswers } from '../../utils/api'
import { Metric, MetricAnswer } from './types'

export const metricsState = selector({
  key: 'metrics',
  get: async () => {
    const response = await getMetrics()

    if (!response.data) {
      return []
    }

    return response.data.map((metric: any) => ({
      id: metric[0],
      code: metric[1],
      name: metric[2],
    })) as Metric[]
  },
})

export const metricsAnswersState = selector({
  key: 'metrics_answers',
  get: async () => {
    const response = await getMetricsAnswers()

    if (!response.data) {
      return []
    }

    return response.data.map((metric: any) => ({
      id: metric[0],
      assetId: metric[1],
      themeId: metric[2],
      metricId: metric[3],
      answer: metric[4],
    })) as MetricAnswer[]
  },
})

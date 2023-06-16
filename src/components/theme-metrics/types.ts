import { Asset, Theme } from '../../pages/assets/types'

export type Metric = {
  id: number
  code: string
  name: string
}

export type MetricAnswer = {
  id: number
  assetId: Asset['id']
  themeId: Theme['id']
  metricId: Metric['id']
  answer: string
}

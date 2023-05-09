export type Metric = {
  id: number
  code: string
  name: string
}

export type MetricAnswer = {
  id: number
  companyId: number
  themeId: number
  metricId: number
  answer: string
}

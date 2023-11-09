import { useRecoilValue } from 'recoil'
import { useCurrentTheme } from 'pages/assets/themes/hooks'
import { useCurrentAsset } from 'pages/assets/hooks'
import { metricsAnswersState, metricsState } from './atom'
import Icon from 'components/icon'

function ThemeMetrics() {
  const theme = useCurrentTheme()
  const currentAsset = useCurrentAsset()
  const metrics = useRecoilValue(metricsState)
  const metricsAnswers = useRecoilValue(metricsAnswersState)

  const themeMetricAnswers = metricsAnswers.filter(
    (metricAnswer) =>
      metricAnswer.assetId === currentAsset!.id &&
      metricAnswer.themeId === theme!.id,
  )

  if (!themeMetricAnswers || !themeMetricAnswers.length) return null

  return (
    <div className="rounded-md bg-base-200 p-4">
      <h2 className="mb-4 font-bold text-lg">Metrics</h2>
      <div className="metrics">
        <ul>
          {themeMetricAnswers.map((metricAnswer) => {
            const metric = metrics.find(
              (metric) => metric.id === metricAnswer.metricId,
            )

            if (!metric) return null

            return (
              <li key={metricAnswer.id} className="text-md my-4">
                <div className="flex flex-row flex-wrap items-center justify-between">
                  <p>
                    <Icon className="text-primary-focus" icon="pie" size={16} />{' '}
                    {metric.name}
                  </p>
                  <p className="text-right text-xs text-accent opacity-90">
                    {metric.code}
                  </p>
                </div>
                {metricAnswer.answer !== 'Undisclosed/Unknown' && (
                  <q className="ml-6 text-lg">{metricAnswer.answer}</q>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ThemeMetrics

import { useCurrentTheme } from '../../pages/companies/themes/hooks'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useRecoilValue } from 'recoil'
import { metricsAnswersState, metricsState } from './atom'
import Icon from '../icon'

function ThemeMetrics() {
  const theme = useCurrentTheme()
  const company = useCurrentCompany()
  const metrics = useRecoilValue(metricsState)
  const metricsAnswers = useRecoilValue(metricsAnswersState)

  const themeMetricAnswers = metricsAnswers.filter(
    (metricAnswer) =>
      metricAnswer.companyId === company!.id &&
      metricAnswer.themeId === theme!.id,
  )

  return (
    <div className="metrics">
      <ul>
        {themeMetricAnswers.map((metricAnswer) => {
          const metric = metrics.find((metric) => metric.id === metricAnswer.id)

          if (!metric) return null

          return (
            <li key={metricAnswer.id} className="text-md">
              <p>
                <Icon className="text-primary-focus" icon="pie" size={16} />{' '}
                {metric.name}
              </p>
              <p className="text-right text-xs text-accent opacity-90">
                {metric.code}
              </p>
              <q className="ml-2 text-lg">{metricAnswer.answer}</q>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ThemeMetrics

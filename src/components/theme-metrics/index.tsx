import { useCurrentTheme } from '../../pages/companies/themes/hooks'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useRecoilValue } from 'recoil'
import { categoriesState } from '../themes-toggles/atoms'
import { metricsAnswersState, metricsState } from './atom'
import { Category } from '../../pages/companies/types'
import Icon from '../icon'

function ThemeMetrics() {
  const theme = useCurrentTheme()
  const company = useCurrentCompany()
  const categories = useRecoilValue(categoriesState)
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
        {themeMetricAnswers.map((metricAnswer) => (
          <li key={metricAnswer.id} className="text-md">
            <p>
              <Icon className="text-primary-focus" icon="pie" size={16} />{' '}
              {metrics.find((metric) => metric.id === metricAnswer.id)!.name}
            </p>
            <q className="ml-2 text-lg">{metricAnswer.answer}</q>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeMetrics

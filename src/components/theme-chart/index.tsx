import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useRecoilValue } from 'recoil'
import { companiesState } from '../company-switcher/atom'
import { themesScoresState } from '../themes-toggles/atoms'
import { Company, Theme } from '../../pages/companies/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type ThemeChartProps = {
  theme: Theme
  company: Company
}

function ThemeChart({ theme, company }: ThemeChartProps) {
  const companies = useRecoilValue(companiesState)
  const themeScores = useRecoilValue(themesScoresState)
  const scores = themeScores.filter(
    (themeScore) => themeScore.themeId === theme.id,
  )

  const scoresCompaniesIds = scores.map((score) => score.companyId)

  if (!scores.length) return <p className="text-md">No data available</p>

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Companies comparison for ${theme.name}`,
      },
    },
  }

  const labels = companies.filter((company) =>
    scoresCompaniesIds.includes(company.id),
  )

  let backgroundColors = labels.map((companyLabel) => {
    if (companyLabel.id === company.id) {
      return 'rgb(9, 232, 211)'
    }

    return 'rgba(9, 232, 211, 0.5)'
  })

  const data = {
    labels: labels.map((company) => company.name),
    datasets: [
      {
        label: 'Score',
        data: scores.map((themeScore) => themeScore.score),
        backgroundColor: backgroundColors,
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export default ThemeChart

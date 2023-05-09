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
import { Theme } from '../../pages/companies/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type ThemeChartProps = {
  theme: Theme
}

function ThemeChart({ theme }: ThemeChartProps) {
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
        text: 'Companies comparison',
      },
    },
  }

  const labels = companies
    .filter((company) => scoresCompaniesIds.includes(company.id))
    .map((company) => company.name)

  const data = {
    labels,
    datasets: [
      {
        label: theme.name,
        data: scores.map((themeScore) => themeScore.score),
        backgroundColor: 'rgba(9, 232, 211, 0.9)',
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export default ThemeChart

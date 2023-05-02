import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Company, Theme } from '../../pages/companies/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

interface ThemeChartProps {
  theme: Theme
  company: Company
}

function ThemeChart({ theme, company }: ThemeChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Scores for ${company.name}`,
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: theme.name,
        data: labels.map(() => Math.random() * 1000),
        borderColor: 'rgb(9, 232, 211)',
        backgroundColor: 'rgba(9, 232, 211, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default ThemeChart

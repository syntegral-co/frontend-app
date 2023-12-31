import { useRecoilValue } from 'recoil'
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
import { useCurrentAsset } from 'pages/assets/hooks'
import { useCurrentTheme } from 'pages/assets/themes/hooks'
import { AssetsState } from 'components/asset-switcher/atom'
import { themesScoresState } from 'components/themes-toggles/atoms'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function ThemeChart() {
  const currentAsset = useCurrentAsset()
  const theme = useCurrentTheme()
  const assets = useRecoilValue(AssetsState)
  const themeScores = useRecoilValue(themesScoresState)
  const scores = themeScores.filter(
    (themeScore) => themeScore.themeId === theme!.id,
  )

  const scoresCompaniesIds = scores.map((score) => score.assetId)

  if (!scores.length) return null

  const options = {
    scales: {
      y: {
        max: 5,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Peer Group Comparison for ${theme!.name}`,
      },
    },
  }

  const labels = assets.filter((asset) => scoresCompaniesIds.includes(asset.id))

  let backgroundColors = labels.map((assetLabel) => {
    if (assetLabel.id === currentAsset!.id) {
      return 'rgb(9, 232, 211)'
    }

    return 'rgba(9, 232, 211, 0.5)'
  })

  const data = {
    labels: labels.map((asset) => asset.name),
    datasets: [
      {
        data: scores.map((themeScore) => themeScore.score),
        backgroundColor: backgroundColors,
      },
    ],
  }

  return (
    <div className="rounded-md bg-base-200 p-4">
      <Bar options={options} data={data} />
    </div>
  )
}

export default ThemeChart

import { useCurrentTheme } from './hooks'
import { useCurrentAsset } from '../hooks'
import { NewsRadarRequest } from './types'
import { useQuery } from '@tanstack/react-query'
import { getThemeSummary } from './api'
import { Interweave } from 'interweave'
import ThemeNews from 'components/theme-news'
import Spinner from 'components/spinner'
import References from 'components/references'
import ThemeMetrics from 'components/theme-metrics'
import ThemeQA from 'components/theme-qa'
import { formatReferences } from 'utils/helpers'

function UpdatedNewsRadar() {
  const theme = useCurrentTheme()
  const currentAsset = useCurrentAsset()

  const { data, fetchStatus }: NewsRadarRequest = useQuery({
    queryKey: ['impact_summary', currentAsset!.id, theme!.id],
    queryFn: () => getThemeSummary(currentAsset!.id, theme!.id),
    staleTime: Infinity,
  })

  if (fetchStatus === 'fetching') return <Spinner context="news" />

  const news = data!.references?.articles?.map((newsData, index) => {
    const formattedNews = {
      title: newsData[0],
      url: newsData[1],
    }

    return <ThemeNews key={index} news={formattedNews} />
  })

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-2 lg:flex-row">
        <div className="mb-4 w-full rounded-md bg-base-200 p-4 lg:w-1/2">
          <h1 className="mb-4 font-maven text-2xl font-bold text-teal md:text-3xl">
            {theme!.name}
          </h1>
          <Interweave content={data!.summary} />
          <h2 className="mb-4 mt-4 text-lg font-bold">References</h2>
          <ol className="mt-4 list-none pl-2">
            <References
              retrieval_type="uri"
              documents={formatReferences(data!.references?.documents)}
            />
          </ol>
        </div>
        <div className="w-full lg:w-1/2">
          <ThemeMetrics />
          <ThemeQA />
        </div>
      </div>
      <h2 className="mb-4 text-lg font-bold text-accent">Source articles</h2>
      <div className="flex flex-row flex-wrap items-start justify-between gap-2">
        {news}
      </div>
    </>
  )
}

export default UpdatedNewsRadar

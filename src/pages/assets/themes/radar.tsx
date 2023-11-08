import { useCurrentTheme } from './hooks'
import { useCurrentAsset } from '../hooks'
import { NewsRadarRequest } from './types'
import { useQuery } from '@tanstack/react-query'
import { getThemeSummary } from './api'
import { Interweave } from 'interweave'
import ThemeNews from 'components/theme-news'
import Spinner from 'components/spinner'
import References from 'components/references'
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
      url: newsData[1]
    }

    return <ThemeNews key={index} news={formattedNews} />
  })

  return (
    <>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full rounded-md bg-base-200 p-4 mb-4">
          <h1 className="mb-4 text-3xl text-accent ">
            {theme!.name}
          </h1>
          <Interweave content={data!.summary} />
          <h2 className="mt-4 mb-4 text-2xl">References</h2>
          <ol className="mt-4 list-none pl-2">
            <References retrieval_type="uri" documents={formatReferences(data!.references?.documents)} />
          </ol>
        </div>
        <h2 className="col-span-full mb-4 text-2xl text-accent ">
          Source articles
        </h2>
        {news}
      </div>
    </>
  )
}

export default UpdatedNewsRadar

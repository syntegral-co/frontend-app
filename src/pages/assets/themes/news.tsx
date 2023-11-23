import { useCurrentTheme } from './hooks'
import { useCurrentAsset } from '../hooks'
import { ThemeNewsRequest } from './types'
import { useQuery } from '@tanstack/react-query'
import { getThemeSummary } from './api'
import { Interweave } from 'interweave'
import ThemeNews from 'components/theme-news'
import Spinner from 'components/spinner'

function NewsRadar() {
  const theme = useCurrentTheme()
  const currentAsset = useCurrentAsset()

  const { data, fetchStatus }: ThemeNewsRequest = useQuery({
    queryKey: ['impact_summary', currentAsset!.id, theme!.id],
    queryFn: () => getThemeSummary(currentAsset!.id, theme!.id),
    staleTime: Infinity,
  })

  if (fetchStatus === 'fetching') return <Spinner context="news" />

  const news = data!.references?.map((newsData) => (
    <ThemeNews key={newsData.id} news={newsData} />
  ))

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full mb-4 rounded-md bg-base-200 p-4">
          <h1 className="mb-4 font-maven text-2xl font-bold text-teal md:text-3xl">
            {theme!.name}
          </h1>
          <Interweave content={data!.summary} />
        </div>
        <h2 className="text-accen col-span-full mb-4 text-lg font-bold">
          Source articles
        </h2>
        {news}
      </div>
    </>
  )
}

export default NewsRadar

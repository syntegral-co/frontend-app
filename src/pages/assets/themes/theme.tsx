import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useCurrentAssetClass } from 'components/asset-class-switcher/hooks'
import { useCurrentAsset } from '../hooks'
import { useCurrentTheme } from './hooks'
import { DocumentLink } from 'components/document-modal/types'
import clsx from 'clsx'
import Spinner from 'components/spinner'
import ThemeChart from 'components/theme-chart'
import ThemeMetrics from 'components/theme-metrics'
import ThemeQA from 'components/theme-qa'
import References from 'components/references'
import { formatReferences } from 'utils/helpers'
import { getThemeSummary } from './api'
import { ThemeSummaryRequest } from './types'

function Theme() {
  const [references, setReferences] = useState<DocumentLink[]>([])
  const currentAssetClass = useCurrentAssetClass()
  const currentAsset = useCurrentAsset()
  const theme = useCurrentTheme()

  const { data, fetchStatus }: ThemeSummaryRequest = useQuery({
    queryKey: ['impact_summary', currentAsset!.id, theme!.id],
    queryFn: () => getThemeSummary(currentAsset!.id, theme!.id),
    staleTime: Infinity,
  })

  useEffect(() => {
    if (!data || !data.references) return

    setReferences(formatReferences(data!.references!))
  }, [data])

  if (fetchStatus === 'fetching') return <Spinner context="data" />

  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-start gap-2 md:flex-row',
        { '!flex-col': currentAssetClass!.id === 5 },
      )}
    >
      <div
        className={clsx('flex w-full flex-col gap-2 md:w-1/2', {
          '!w-full': currentAssetClass!.id === 5,
        })}
      >
        <div className="rounded-md bg-base-200 p-4">
          <h1 className="mb-4 font-maven text-2xl font-bold text-teal md:text-3xl">
            {theme!.name}
          </h1>
          {data?.summary && <p>{data?.summary}</p>}
          {!!references.length && (
            <>
              <h2 className="mb-4 mt-4 text-lg font-bold">References</h2>
              <ol className="mt-4 list-none pl-2">
                <References documents={references} />
              </ol>
            </>
          )}
        </div>
      </div>
      <div
        className={clsx('flex w-full flex-col gap-2 md:w-1/2', {
          '!w-full': currentAssetClass!.id === 5,
        })}
      >
        <ThemeMetrics />
        <ThemeChart />
        <ThemeQA />
      </div>
    </div>
  )
}

export default Theme

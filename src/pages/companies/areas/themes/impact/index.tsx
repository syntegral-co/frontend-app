import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useCurrentCompany } from '../../../hooks'
import { useCurrentImpactArea } from './hooks'
import { useDrawer } from '../../../../../components/drawer/hooks'
import { getImpactSummary } from '../../../../../utils/api'
import { formatReferences } from '../../../../../utils/helpers'
import { IDocumentLink } from '../../../../../components/drawer/types'
import DocumentDrawer from '../../../../../components/drawer'
import Sidebar from '../../../../../components/sidebar'
import Spinner from '../../../../../components/spinner'

function ImpactArea() {
  const [references, setReferences] = useState<IDocumentLink[]>([])
  const currentCompany = useCurrentCompany()
  const impactArea = useCurrentImpactArea()
  console.log('impactArea: ', impactArea)
  const { onClickDocument } = useDrawer()

  const { data, fetchStatus } = useQuery({
    queryKey: ['impact_summary'],
    queryFn: () => getImpactSummary(currentCompany!.id, impactArea!.name),
    staleTime: Infinity,
  })

  useEffect(() => {
    if (!data || !data.references) return

    setReferences(formatReferences(data!.references!))
  }, [data])

  return (
    <>
      <DocumentDrawer />
      <Sidebar />
      <div className="h-full w-full items-center justify-center overflow-y-scroll rounded-md bg-base-200 px-4 py-2">
        {fetchStatus === 'fetching' ? (
          <Spinner />
        ) : (
          <>
            <h1 className="mb-4 text-3xl text-accent">{impactArea!.name}</h1>
            <p>{data.summary}</p>
            <ol className="mt-4 list-none pl-2">
              {references.map((link, index) => (
                <li
                  className="cursor-pointer"
                  onClick={() => onClickDocument(link)}
                  key={index}
                >
                  📄
                  <span className="italic text-secondary hover:underline">
                    {link.name}
                  </span>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </>
  )
}

export default ImpactArea

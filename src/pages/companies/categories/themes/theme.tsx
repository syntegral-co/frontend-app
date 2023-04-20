import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { useCurrentCompany } from '../../hooks'
import { useCurrentCategory } from '../hooks'
import { useCurrentTheme } from './hooks'
import { useDrawer } from '../../../../components/drawer/hooks'
import { getThemeSummary } from '../../../../utils/api'
import { formatReferences } from '../../../../utils/helpers'
import { DocumentLink } from '../../../../components/drawer/types'
import DocumentDrawer from '../../../../components/drawer'
import Sidebar from '../../../../components/sidebar'
import Spinner from '../../../../components/spinner'
import Icon from '../../../../components/icon'

function Theme() {
  const [references, setReferences] = useState<DocumentLink[]>([])
  const currentCompany = useCurrentCompany()
  const currentCategory = useCurrentCategory()
  const theme = useCurrentTheme()
  const { onClickDocument } = useDrawer()

  const { data, fetchStatus } = useQuery({
    queryKey: ['impact_summary', theme!.name],
    queryFn: () => getThemeSummary(currentCompany!.id, theme!.name),
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
      <div className="h-full w-full items-center justify-center overflow-y-scroll  bg-base-200 px-4 py-2">
        {fetchStatus === 'fetching' ? (
          <Spinner />
        ) : (
          <>
            <div className="mb-4 flex flex-row items-center justify-start text-accent">
              <NavLink
                to={`/companies/${currentCompany!.id}/categories/${
                  currentCategory!.id
                }/themes/score`}
                className="mr-4 hover:text-accent-focus"
              >
                <Icon icon={'arrow-left2'} size={20} />
              </NavLink>
              <h1 className="text-3xl">{theme!.name}</h1>
            </div>
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

export default Theme

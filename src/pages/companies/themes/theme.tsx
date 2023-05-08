import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { useCurrentCompany } from '../hooks'
import { useCurrentTheme } from './hooks'
import { useThemes } from '../../../components/themes-toggles/hooks'
import { useDrawer } from '../../../components/drawer/hooks'
import { getThemeSummary } from '../../../utils/api'
import {
  categoriesState,
  qaState,
} from '../../../components/themes-toggles/atoms'
import { formatReferences, getThemeScore } from '../../../utils/helpers'
import { Category, QA } from '../types'
import { DocumentLink } from '../../../components/drawer/types'
import DocumentDrawer from '../../../components/drawer'
import Sidebar from '../../../components/sidebar'
import Spinner from '../../../components/spinner'
import Ratings from '../../../components/ratings'
import Icon from '../../../components/icon'
import ThemeChart from '../../../components/theme-chart'

function Theme() {
  const [references, setReferences] = useState<DocumentLink[]>([])
  const currentCompany = useCurrentCompany()
  const theme = useCurrentTheme()
  const { scores } = useThemes()
  const categories = useRecoilValue(categoriesState)
  const QAs = useRecoilValue(qaState)

  const themeQAs = QAs.filter((qa: QA) => qa.themeId === theme.id)

  const companyScores = scores.filter(
    (score: any) => score.companyId === currentCompany!.id,
  )

  const { onClickDocument } = useDrawer()

  const { data, fetchStatus } = useQuery({
    queryKey: ['impact_summary', theme!.id],
    queryFn: () => getThemeSummary(currentCompany!.id, theme!.id),
    staleTime: Infinity,
  })

  useEffect(() => {
    if (!data || !data.references) return

    setReferences(formatReferences(data!.references!))
  }, [data])

  if (fetchStatus === 'fetching') return <Spinner />

  return (
    <>
      <DocumentDrawer />
      <Sidebar />
      <div className="flex flex-col items-start justify-start gap-2 md:flex-row">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <div className="rounded-md bg-base-200 p-4">
            <h1 className="mb-4 text-3xl text-accent">{theme!.name}</h1>
            <p>{data.summary}</p>
          </div>
          <div className="rounded-md bg-base-200 p-4">
            <h2 className="mb-4 text-2xl">Documents</h2>
            <ol className="mt-4 list-none pl-2">
              {references.map((link, index) => (
                <li
                  className="cursor-pointer"
                  onClick={() => onClickDocument(link)}
                  key={index}
                >
                  <Icon icon="file-pdf" size={16} />
                  <span className="ml-2 italic text-secondary hover:underline">
                    {link.name}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          <div className="rounded-md bg-base-200 p-4">
            <h2 className="mb-4 text-2xl">Key Metrics</h2>
            <div className="stat">
              <div className="stat-title">{theme.name}</div>
              <div className="stat-value">
                <Ratings
                  id={theme.id}
                  rating={getThemeScore(theme.id, companyScores)}
                />
              </div>
              <div className="stat-desc italic text-accent">
                {
                  categories.find(
                    (category: Category) => category.id === theme.categoryId,
                  ).name
                }
              </div>
            </div>
          </div>
          <div className="rounded-md bg-base-200 p-4">
            <ThemeChart theme={theme} company={currentCompany!} />
          </div>
          {themeQAs.length ? (
            <div className="rounded-md bg-base-200 p-4">
              <h2 className="mb-4 text-2xl">Questions</h2>
              <ol className="mt-4 list-none pl-2">
                {themeQAs.map((qa: QA, index: number) => (
                  <li className="cursor-pointer" key={index}>
                    <p>
                      <Icon icon="help" size={16} />
                      <span className="italic">{qa.question}</span>
                    </p>
                    <p>{qa.answer}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Theme

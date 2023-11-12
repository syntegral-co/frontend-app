import { useCurrentViewMode } from './hooks'
import ThemesToggles from 'components/themes-toggles'
import ThemesCategories from 'components/themes-categories'
import CategoriesNews from 'components/categories-news/news'
import ViewSelector from 'components/view-selector'
import ThemesList from 'components/themes-list'
import ThemesTable from 'components/themes-table'
import ThemesSatellites from 'components/themes-satellite'

function Themes() {
  const viewMode = useCurrentViewMode()

  let themesView: JSX.Element = <></>

  switch (viewMode) {
    case 'list':
      themesView = <ThemesList />
      break

    case 'table':
      themesView = <ThemesTable />
      break

    case 'compare':
      themesView = <div>{viewMode}</div> //COMING SOON!
      break

    case 'satellite':
      themesView = <ThemesSatellites />
      break

    default:
      viewMode satisfies never
  }

  return (
    <div className="flex w-full flex-col">
      {viewMode !== 'satellite' && (
        <>
          <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
            <ThemesToggles />
          </div>
          <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
            <ViewSelector />
          </div>
        </>
      )}
      {viewMode === 'satellite' && (
        <div className="mx-auto mb-8 h-auto w-auto rounded-md bg-base-200 p-6">
          <ThemesCategories />
        </div>
      )}
      {themesView}
      {viewMode === 'satellite' && (
        <div className="mx-auto mb-8 h-auto w-full rounded-md py-2 mt-4">
          <div className="divider">News Radar</div>
          <CategoriesNews />
        </div>
      )}
    </div>
  )
}

export default Themes

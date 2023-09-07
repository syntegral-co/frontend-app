import { useCurrentViewMode } from './hooks'
import ThemesToggles from 'components/themes-toggles'
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
      themesView = <div>{viewMode}</div>
      break

    case 'satellite':
      themesView = <ThemesSatellites />
      break

    default:
      viewMode satisfies never
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
        <ThemesToggles />
      </div>
      {viewMode !== 'satellite' && (
        <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
          <ViewSelector />
        </div>
      )}
      {themesView}
    </div>
  )
}

export default Themes

import { useRecoilValue } from 'recoil'
import { viewModeState } from '../../../components/view-selector/atom'
import Sidebar from '../../../components/sidebar'
import ThemesToggles from '../../../components/themes-toggles'
import ViewSelector from '../../../components/view-selector'
import ThemesList from '../../../components/themes-list'
import ThemesTable from '../../../components/themes-table'

function Themes() {
  const viewMode = useRecoilValue(viewModeState)

  return (
    <>
      <Sidebar />
      <div className="flex w-full flex-col">
        <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
          <ThemesToggles />
        </div>
        <div className="mb-4 h-auto w-full rounded-md bg-base-200 p-6">
          <ViewSelector />
        </div>
        {viewMode === 'list' ? <ThemesList /> : <ThemesTable />}
      </div>
    </>
  )
}

export default Themes

import { SetterOrUpdater, useRecoilState } from 'recoil'
import Icon from '../icon'
import { viewModeState } from './atom'
import { ViewMode } from './types'

function ViewSelector() {
  const [viewMode, setViewMode] = useRecoilState(viewModeState)

  function toggleViewMode() {
    setViewMode(viewMode === 'list' ? 'table' : 'list')
  }

  const viewModeIcon = viewMode === 'list' ? 'table2' : 'menu'

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <label className="inline-block" htmlFor="themes">
        View mode
      </label>
      <Icon
        className="cursor-pointer"
        icon={viewModeIcon}
        size={24}
        onClick={toggleViewMode}
      />
    </div>
  )
}

export default ViewSelector

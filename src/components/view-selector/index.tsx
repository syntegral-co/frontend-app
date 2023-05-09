import { useRecoilState } from 'recoil'
import { viewModeState } from './atom'
import Icon from '../icon'
import { capitalize } from '../../utils/helpers'

function ViewSelector() {
  const [viewMode, setViewMode] = useRecoilState(viewModeState)

  function toggleViewMode() {
    setViewMode(viewMode === 'list' ? 'table' : 'list')
  }

  const viewModeIcon = viewMode === 'list' ? 'table2' : 'menu'

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row flex-nowrap gap-2">
        {/* <Icon icon="zoom-in" size={24} />
        <label className="inline-block" htmlFor="themes">
          Compare company
        </label> */}
      </div>
      <div className="flex flex-row flex-nowrap gap-2">
        <label className="inline-block" htmlFor="themes">
          {capitalize(viewMode)}
        </label>
        <Icon
          className="cursor-pointer"
          icon={viewModeIcon}
          size={24}
          onClick={toggleViewMode}
        />
      </div>
    </div>
  )
}

export default ViewSelector

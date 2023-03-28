import { useRecoilValue } from 'recoil'
import { impactAreasState } from '../../state/atom'
import { useImpactAreas } from './hooks'

function ImpactAreasToggles() {
  const { toggleImpactArea } = useImpactAreas()
  const areas = useRecoilValue(impactAreasState)

  return (
    <>
      {areas.map((area) => (
        <div key={area.id} className='form-control w-52'>
          <label className='label cursor-pointer'>
            <span className='label-text mr-2 text-primary-content'>
              {area.name}
            </span>
            <input
              type='checkbox'
              className='toggle-accent toggle'
              checked={area.checked}
              onChange={() => toggleImpactArea(area.id)}
            />
          </label>
        </div>
      ))}
    </>
  )
}

export default ImpactAreasToggles

import {
  ImpactArea,
  impactAreas,
  peopleImpactAreas,
} from '../../pages/areas/types'

function ImpactAreasToggles() {
  const areas: ImpactArea[] = [...impactAreas, ...peopleImpactAreas]

  return (
    <>
      {areas.map((area) => (
        <div className='form-control w-52'>
          <label className='label cursor-pointer'>
            <span className='label-text mr-2 text-primary-content'>
              {area.name}
            </span>
            <input type='checkbox' className='toggle-accent toggle' />
          </label>
        </div>
      ))}
    </>
  )
}

export default ImpactAreasToggles

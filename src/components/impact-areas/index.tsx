import { useImpactAreas } from './hooks'
import { useCurrentTheme } from '../../pages/companies/areas/themes/hooks'

function ImpactAreasToggles() {
  const currentTheme = useCurrentTheme()
  const { impactAreas, toggleImpactArea } = useImpactAreas()

  const themeAreas = Object.values(currentTheme!.impactAreas!)
  const themeAreasIds = themeAreas.map((area) => area.id)

  const selectedAreas = impactAreas.filter((area) =>
    themeAreasIds.includes(area.id),
  )

  return (
    <>
      {selectedAreas.map((area) => (
        <div key={area.id} className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text mr-2 text-primary-content">
              {area.name}
            </span>
            <input
              type="checkbox"
              className="toggle-accent toggle"
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

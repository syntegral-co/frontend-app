import { useThemes } from './hooks'
import { useCurrentCategory } from '../../pages/companies/categories/hooks'

function ThemesToggles() {
  const currentCategory = useCurrentCategory()
  const { themes, toggleImpactArea } = useThemes()

  const categoryThemes = Object.values(currentCategory!.themes!)
  const categoryThemesIds = categoryThemes.map((area) => area.id)

  const selectedThemes = themes.filter((theme) =>
    categoryThemesIds.includes(theme.id),
  )

  return (
    <>
      {selectedThemes.map((area) => (
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

export default ThemesToggles

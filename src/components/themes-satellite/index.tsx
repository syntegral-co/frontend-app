import { useThemes } from '../themes-toggles/hooks'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'
import { icons } from './constants'

function ThemesSatellites() {
  const { themes, selectedThemes } = useThemes()

  const navigate = useNavigate()

  return (
    <div className="grid h-auto w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {themes
        .filter((theme) => {
          if (!selectedThemes.length) return true

          return selectedThemes.includes(theme.id)
        })
        .map((theme) => {
          let hoverStyles = ''

          switch (theme.id) {
            case 41:
              hoverStyles = 'hover:border-energy hover:shadow-energy'
              break
            case 42:
              hoverStyles =
                'hover:border-health_wellbeing hover:shadow-health_wellbeing'
              break
            case 43:
              hoverStyles = 'hover:border-innovation hover:shadow-innovation'
              break
            case 44:
              hoverStyles =
                'hover:border-land_use_ecology hover:shadow-land_use_ecology'
              break
            case 45:
              hoverStyles = 'hover:border-management hover:shadow-management'
              break
            case 46:
              hoverStyles = 'hover:border-materials hover:shadow-materials'
              break
            case 47:
              hoverStyles = 'hover:border-pollution hover:shadow-pollution'
              break
            case 48:
              hoverStyles =
                'hover:border-transportation hover:shadow-transportation'
              break
            case 49:
              hoverStyles = 'hover:border-waste hover:shadow-waste'
              break
            case 50:
              hoverStyles = 'hover:border-water hover:shadow-water'
              break
            default:
              hoverStyles = ''
          }

          return (
            <div
              key={theme.id}
              className={twMerge(
                'card max-h-64 w-48 cursor-pointer border-2 bg-base-200 shadow-xl duration-300 ease-in-out hover:z-10 hover:scale-125',
                hoverStyles,
              )}
              onClick={() => navigate(`./${theme.id}`)}
            >
              <figure className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#000]">
                <img
                  src={icons[theme.id]}
                  alt={`${theme.name} icon`}
                  className="h-16 w-16"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{theme.name}</h2>
                <div className="card-actions">
                  <button className="btn-primary btn-outline btn-sm btn">
                    View report
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ThemesSatellites

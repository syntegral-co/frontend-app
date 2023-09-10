import { useNavigate } from 'react-router-dom'
import { useThemes } from '../themes-toggles/hooks'
import { twMerge } from 'tailwind-merge'
import { disabledThemes } from 'components/themes-list/constants'
import { icons } from './constants'
import clsx from 'clsx'
import { useCurrentCategory } from 'components/themes-categories/hooks'

function ThemesSatellites() {
  const { themes, selectedThemes } = useThemes()
  const currentCategory = useCurrentCategory()
  const navigate = useNavigate()

  return (
    <div className="grid h-auto w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {themes
        .filter((theme) => {
          if (!selectedThemes.length) return true

          return selectedThemes.includes(theme.id)
        })
        .filter((theme) => theme.categoryId === currentCategory)
        .map((theme) => {
          let hoverStyles = ''

          switch (theme.id) {
            case 41:
            case 51:
              hoverStyles = 'hover:border-energy hover:shadow-energy'
              break
            case 42:
            case 52:
              hoverStyles =
                'hover:border-health_wellbeing hover:shadow-health_wellbeing'
              break
            case 43:
            case 53:
              hoverStyles = 'hover:border-innovation hover:shadow-innovation'
              break
            case 44:
            case 54:
              hoverStyles =
                'hover:border-land_use_ecology hover:shadow-land_use_ecology'
              break
            case 45:
            case 55:
              hoverStyles = 'hover:border-management hover:shadow-management'
              break
            case 46:
            case 56:
              hoverStyles = 'hover:border-materials hover:shadow-materials'
              break
            case 47:
            case 57:
              hoverStyles = 'hover:border-pollution hover:shadow-pollution'
              break
            case 48:
            case 58:
              hoverStyles =
                'hover:border-transportation hover:shadow-transportation'
              break
            case 49:
            case 59:
              hoverStyles = 'hover:border-waste hover:shadow-waste'
              break
            case 50:
            case 60:
              hoverStyles = 'hover:border-water hover:shadow-water'
              break
            default:
              hoverStyles = ''
          }

          return (
            <div
              key={theme.id}
              className={clsx(
                twMerge(
                  'card max-h-72 w-48 cursor-pointer border-2 bg-base-200 shadow-xl duration-300 ease-in-out hover:z-10 hover:scale-125',
                  hoverStyles,
                ),
                {
                  'opacity-30 pointer-events-none': disabledThemes.includes(
                    theme.id,
                  ),
                },
              )}
              onClick={() => navigate(`./${theme.id}`)}
            >
              <figure className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#000]">
                <img
                  src={icons[theme.id] || '/assets/images/syntegral.svg'}
                  alt={`${theme.name} icon`}
                  className="h-16 w-16"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{theme.name}</h2>
                <div className="card-actions">
                  <button className="btn-primary btn-link btn-sm btn">
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

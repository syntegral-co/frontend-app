import { useThemes } from '../themes-toggles/hooks'
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
        .map((theme) => (
          <div
            key={theme.id}
            className="card max-h-64 w-48 cursor-pointer border-2 border-neutral bg-base-100 shadow-xl duration-300 ease-in-out hover:z-10 hover:scale-125"
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
        ))}
    </div>
  )
}

export default ThemesSatellites

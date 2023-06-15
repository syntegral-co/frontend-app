import { useCurrentCompany, useIsSwigcoDemo } from '../../pages/companies/hooks'
import { useThemes } from '../themes-toggles/hooks'
import { useRecoilValue } from 'recoil'
import { categoriesState } from '../themes-toggles/atoms'
import { NavLink } from 'react-router-dom'
import Ratings from '../ratings'
import { getThemeScore } from '../../utils/helpers'

function ThemesList() {
  const isSwigcoDemo = useIsSwigcoDemo(false)
  const currentCompany = useCurrentCompany()
  const { themes, scores, selectedThemes } = useThemes()
  const categories = useRecoilValue(categoriesState)

  const companyScores = scores.filter(
    (score: any) => score.companyId === currentCompany!.id,
  )

  return (
    <div className="grid h-auto w-full grid-cols-1 grid-rows-none gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {themes
        .filter((theme) => {
          if (!selectedThemes.length) return true

          return selectedThemes.includes(theme.id)
        })
        .map((theme) => (
          <div
            className="group stats relative h-32 min-h-fit cursor-pointer overflow-hidden bg-base-200 shadow"
            key={theme.id}
          >
            <div className="z-5 absolute -inset-full top-0 block h-auto w-1/2 -skew-x-12 transform bg-primary-content opacity-40 group-hover:animate-shine" />
            <NavLink className="border-none" to={`./${theme.id}`}>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full bg-base-100">
                      <p className="h-full text-center align-middle text-5xl leading-relaxed">
                        {theme.name.charAt(0)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stat-value">
                  {!isSwigcoDemo && (
                    <Ratings
                      id={theme.id}
                      rating={getThemeScore(theme.id, companyScores)}
                    />
                  )}
                </div>
                <div className="stat-title w-2/3 overflow-hidden text-ellipsis">
                  {theme.name}
                </div>
                <div className="stat-desc italic text-accent">
                  {
                    categories.find(
                      (category) => category.id === theme.categoryId,
                    )!.name
                  }
                </div>
              </div>
            </NavLink>
          </div>
        ))}
    </div>
  )
}

export default ThemesList

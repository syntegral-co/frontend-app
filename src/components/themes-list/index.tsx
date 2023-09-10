import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useCurrentAsset, useIsSwigcoUser } from 'pages/assets/hooks'
import { ThemeScore } from 'pages/assets/types'
import { useThemes } from 'components/themes-toggles/hooks'
import { categoriesState } from 'components/themes-toggles/atoms'
import Ratings from 'components/ratings'
import { getThemeScore } from 'utils/helpers'
import clsx from 'clsx'
import { disabledThemes } from './constants'

function ThemesList() {
  const isSwigcoUser = useIsSwigcoUser()
  const currentAsset = useCurrentAsset()
  const { themes, scores, selectedThemes } = useThemes()
  const categories = useRecoilValue(categoriesState)

  const assetScore = scores.filter(
    (score: ThemeScore) => score.assetId === currentAsset!.id,
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
            <div
              className={clsx(
                'z-5 absolute -inset-full top-0 block h-auto w-1/2 -skew-x-12 transform bg-primary-content opacity-40',
                {
                  'group-hover:animate-shine': !disabledThemes.includes(
                    theme.id,
                  ),
                },
              )}
            />
            <Link
              className={clsx('border-none', {
                'opacity-30 pointer-events-none': disabledThemes.includes(
                  theme.id,
                ),
              })}
              to={`./${theme.id}`}
            >
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
                  {!isSwigcoUser && (
                    <Ratings
                      id={theme.id}
                      rating={getThemeScore(theme.id, assetScore)}
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
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ThemesList

import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useCurrentAssetClass } from 'components/asset-class-switcher/hooks'
import { useCurrentAsset, useIsSwigcoUser } from 'pages/assets/hooks'
import { ThemeScore } from 'pages/assets/types'
import { useThemes } from 'components/themes-toggles/hooks'
import { categoriesState } from 'components/themes-toggles/atoms'
import Ratings from 'components/ratings'
import { getThemeScore } from 'utils/helpers'
import clsx from 'clsx'
import { disabledThemes } from 'components/themes-list/constants'

function ThemesTable() {
  const isSwigcoUser = useIsSwigcoUser()
  const currentAssetClass = useCurrentAssetClass()
  const currentAsset = useCurrentAsset()
  const { themes, scores, selectedThemes } = useThemes()
  const categories = useRecoilValue(categoriesState)

  const assetScore = scores.filter(
    (score: ThemeScore) => score.assetId === currentAsset!.id,
  )

  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Theme</th>
            {!isSwigcoUser && currentAssetClass!.id === 1 && <th>Rating</th>}
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {themes
            .filter((theme) => {
              if (!selectedThemes.length) return true

              return selectedThemes.includes(theme.id)
            })
            .map((theme, index) => (
              <tr
                key={theme.id}
                className={clsx('hover cursor-pointer', {
                  'pointer-events-none opacity-30': disabledThemes.includes(
                    theme.id,
                  ),
                })}
                onClick={() => navigate(`./${theme.id}`)}
              >
                <th>{index + 1}</th>
                <td>{theme.name}</td>
                {!isSwigcoUser && currentAssetClass!.id === 1 && (
                  <td>
                    <Ratings
                      id={theme.id}
                      rating={getThemeScore(theme.id, assetScore)}
                    />
                  </td>
                )}
                <td>
                  {
                    categories.find(
                      (category) => category.id === theme.categoryId,
                    )!.name
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ThemesTable

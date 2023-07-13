import { useRecoilValue } from 'recoil'
import { useCurrentAsset, useIsSwigcoUser } from '../../pages/assets/hooks'
import { useThemes } from '../themes-toggles/hooks'
import { useNavigate } from 'react-router-dom'
import { categoriesState } from '../themes-toggles/atoms'
import Ratings from '../ratings'
import { getThemeScore } from '../../utils/helpers'
import { ThemeScore } from '../../pages/assets/types'

function ThemesTable() {
  const isSwigcoUser = useIsSwigcoUser()
  const currentAsset = useCurrentAsset()
  const { themes, scores, selectedThemes } = useThemes()
  const categories = useRecoilValue(categoriesState)

  const assetScore = scores.filter(
    (score: ThemeScore) => score.assetId === currentAsset!.id,
  )

  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <table className="table-zebra table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Theme</th>
            {!isSwigcoUser && <th>Rating</th>}
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
                className="hover cursor-pointer"
                onClick={() => navigate(`./${theme.id}`)}
              >
                <th>{index + 1}</th>
                <td>{theme.name}</td>
                {!isSwigcoUser && (
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

import { useRecoilValue } from 'recoil'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useThemes } from '../themes-toggles/hooks'
import { useNavigate } from 'react-router-dom'
import { categoriesState } from '../themes-toggles/atoms'
import { Category, Theme } from '../../pages/companies/types'
import Ratings from '../ratings'
import { getThemeScore } from '../../utils/helpers'

function ThemesTable() {
  const currentCompany = useCurrentCompany()
  const { themes, scores, selectedThemes } = useThemes()
  const categories = useRecoilValue(categoriesState)

  const companyScores = scores.filter(
    (score: any) => score.companyId === currentCompany!.id,
  )

  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <table className="table-zebra table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Theme</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {themes
            .filter((theme: Theme) => {
              if (!selectedThemes.length) return true

              return selectedThemes.includes(theme.id)
            })
            .map((theme: Theme, index: number) => (
              <tr
                key={theme.id}
                className="hover cursor-pointer"
                onClick={() => navigate(`./${theme.id}`)}
              >
                <th>{index + 1}</th>
                <td>{theme.name}</td>
                <td>
                  <Ratings
                    id={theme.id}
                    rating={getThemeScore(theme.id, companyScores)}
                  />
                </td>
                <td>
                  {
                    categories.find(
                      (category: Category) => category.id === theme.categoryId,
                    ).name
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

import { NavLink } from 'react-router-dom'
import { useCurrentCompany } from '../hooks'
import { useCurrentCategory } from './hooks'
import { useThemes } from '../../../components/themesToggles/hooks'
import { Category } from './types'
import { Company } from '../types'
import CircularProgress from '../../../components/circular-progress'

interface CategoryProps {
  company: Company
  category: Category
}

function Category({ company, category }: CategoryProps): JSX.Element {
  const currentCompany = useCurrentCompany()
  const currentCategory = useCurrentCategory()
  const { themes } = useThemes()

  const selectedThemes = themes.filter((theme) => theme.checked)

  if (!company || !company.themes) return <></>

  let themePercentage = company.themes[category.id].score
  let impactAreasElements: JSX.Element[] = []

  if (currentCategory && currentCategory.id === category.id) {
    impactAreasElements = selectedThemes.map((theme, index) => {
      const score = company!.themes![category.id].themes![theme.id]
      themePercentage += score > 50 ? 5 : -5

      return (
        <CircularProgress
          key={theme.id}
          color={score > 50 ? 'positive' : 'negative'}
          percentage={score}
          size="3rem"
          thickness=".3rem"
          subtheme={index}
        >
          <NavLink
            to={`/companies/${currentCompany!.id}/categories/${
              currentCategory.id
            }/themes/${theme.id}`}
          >
            <div className="placeholder avatar">
              <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                <span className="text-xl">{theme.name.charAt(0)}</span>
              </div>
            </div>
          </NavLink>
        </CircularProgress>
      )
    })
  }

  const themeIcon: string =
    currentCategory && currentCategory.id === category.id
      ? category.icon
      : `${category.icon}-alt`

  return (
    <>
      <CircularProgress
        color={
          currentCategory
            ? currentCategory.id === category.id
              ? category.id
              : 'neutral'
            : category.id
        }
        percentage={themePercentage}
        link={`/companies/${company!.id}/categories/${category.id}/themes`}
      >
        <img
          className="h-20 w-auto rounded-full bg-neutral-focus p-2"
          src={`/assets/images/${themeIcon}.svg`}
        />
      </CircularProgress>
      <span className="badge mt-2 border-none bg-primary text-primary-content">
        {category.name}
      </span>
      {impactAreasElements}
    </>
  )
}

export default Category

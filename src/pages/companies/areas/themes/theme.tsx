import { NavLink } from 'react-router-dom'
import { useCurrentTheme } from './hooks'
import { useImpactAreas } from '../../../../components/impact-areas/hooks'
import CircularProgress from '../../../../components/circular-progress'
import { ITheme } from './types'
import { ICompany } from '../../types'
import { useCurrentCompany } from '../../hooks'

interface IThemeProps {
  company: ICompany
  theme: ITheme
}

function Theme({ company, theme }: IThemeProps): JSX.Element {
  const currentCompany = useCurrentCompany()
  const currentTheme = useCurrentTheme()
  const { impactAreas } = useImpactAreas()

  const selectedImpactAreas = impactAreas.filter((area) => area.checked)

  if (!company || !company.themes) return <></>

  let themePercentage = company.themes[theme.id].score
  let impactAreasElements: JSX.Element[] = []

  if (currentTheme && currentTheme.id === theme.id) {
    impactAreasElements = selectedImpactAreas.map((area, index) => {
      const score = company!.themes![theme.id].impactAreas![area.id]
      themePercentage += score > 50 ? 5 : -5

      return (
        <CircularProgress
          key={area.id}
          color={score > 50 ? 'positive' : 'negative'}
          percentage={score}
          size="3rem"
          thickness=".3rem"
          subtheme={index}
        >
          <NavLink
            to={`/companies/${currentCompany!.id}/themes/${
              currentTheme.id
            }/areas/score/${area.id}`}
          >
            <div className="placeholder avatar">
              <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                <span className="text-xl">{area.name.charAt(0)}</span>
              </div>
            </div>
          </NavLink>
        </CircularProgress>
      )
    })
  }

  const themeIcon: string =
    currentTheme && currentTheme.id === theme.id ? theme.id : `${theme.id}-alt`

  return (
    <>
      <CircularProgress
        color={
          currentTheme
            ? currentTheme.id === theme.id
              ? theme.id
              : 'neutral'
            : theme.id
        }
        percentage={themePercentage}
      >
        <img
          className="h-20 w-auto rounded-full bg-neutral-focus p-2"
          src={`/assets/images/${themeIcon}.svg`}
        />
      </CircularProgress>
      <span className="badge mt-2 border-none bg-primary text-primary-content">
        {theme.name}
      </span>
      {impactAreasElements}
    </>
  )
}

export default Theme

import CircularProgress from '../circular-progress'
import { ITheme } from '../../pages/themes/types'
import { ICompany } from '../../pages/companies/types'
import { useParams } from 'react-router-dom'
import LineTo from 'react-lineto'
import { THEMES_POSITIONS } from '../../utils/constants'

interface IThemeProps {
  company: ICompany
  theme: ITheme
}

function Theme({ company, theme }: IThemeProps): JSX.Element {
  const { theme: themeParam } = useParams()

  const showSubThemes = themeParam === theme.id

  let subThemes: JSX.Element[] = []

  if (showSubThemes) {
    for (let i = 0; i < THEMES_POSITIONS.length; i++) {
      subThemes.push(
        <CircularProgress
          key={i}
          color='success'
          percentage={20}
          size='3rem'
          thickness='.5rem'
          subtheme={i}
        >
          <img
            className='h-10 w-auto rounded-full bg-neutral-focus p-2'
            src={`/src/assets/images/subtheme.svg`}
          />
        </CircularProgress>
      )
    }
  }

  let themeIcon: string = theme.id

  if (themeParam) {
    themeIcon = themeParam === theme.id ? theme.id : `${theme.id}-alt`
  }

  return (
    <>
      <CircularProgress color={theme.id} percentage={company.themes[theme.id]}>
        <img
          className='h-20 w-auto rounded-full bg-neutral-focus p-2'
          src={`/src/assets/images/${themeIcon}.svg`}
        />
      </CircularProgress>
      <span className='badge mt-2 border-none bg-secondary'>{theme.name}</span>
      {subThemes}
    </>
  )
}

export default Theme

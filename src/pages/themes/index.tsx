import { useCurrentTheme } from './hooks'
import { useSpring } from '@react-spring/web'
import CircularProgress from '../../components/circular-progress'
import { ITheme } from './types'
import { ICompany } from '../companies/types'
import LineTo from 'react-lineto'

interface IThemeProps {
  company: ICompany
  theme: ITheme
}

function Theme({ company, theme }: IThemeProps): JSX.Element {
  const currentTheme = useCurrentTheme()

  if (!company || !company.themes) return <></>

  let impactAreas: JSX.Element[] = []

  if (currentTheme && currentTheme.id === theme.id) {
    for (let i = 0; i < currentTheme!.impactAreas!.length; i++) {
      const currentImpactArea = currentTheme!.impactAreas![i].id
      const score = company.themes[theme.id].impactAreas![currentImpactArea]
      console.log('score: ', score)

      impactAreas.push(
        <CircularProgress
          key={i}
          color={score > 50 ? 'positive' : 'negative'}
          percentage={score}
          size='3rem'
          thickness='.3rem'
          subtheme={i}
        >
          <img
            className='h-10 w-auto rounded-full bg-neutral-focus p-2'
            src={`/src/assets/images/${currentTheme!.id}/${
              currentTheme!.impactAreas![i].id
            }.svg`}
          />
        </CircularProgress>
      )
    }
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
        percentage={company.themes[theme.id].score}
      >
        <img
          className='h-20 w-auto rounded-full bg-neutral-focus p-2'
          src={`/src/assets/images/${themeIcon}.svg`}
        />
      </CircularProgress>
      <span className='badge mt-2 border-none bg-primary text-primary-content'>
        {theme.name}
      </span>
      {impactAreas}
    </>
  )
}

export default Theme

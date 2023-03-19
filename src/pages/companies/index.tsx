import { NavLink, useParams } from 'react-router-dom'
import { companies } from '../../state/data'
import { getThemesArray } from '../themes/types'
import { ICompany } from './types'
import CircularProgress from '../../components/circular-progress'

function Company() {
  const { company } = useParams()

  const mockCompany = companies.find(
    (mockCompany: ICompany) => mockCompany.id === company
  )
  const themes = getThemesArray()

  return (
    <div className='align-center flex w-full flex-row flex-wrap justify-around gap-2 rounded-md bg-base-200 px-4 py-8'>
      {themes.map((theme) => (
        <NavLink
          key={theme.id}
          className='flex flex-col items-center justify-center text-center'
          to={`./themes/${theme.id}`}
        >
          <CircularProgress
            color={theme.id}
            percentage={Math.floor(Math.random() * 70 + 30)}
          >
            <img
              className='h-20 w-auto rounded-full bg-neutral-focus p-2'
              src={`/${theme.id}.svg`}
            />
          </CircularProgress>
          <span className='badge mt-2 border-none bg-secondary'>
            {theme.name}
          </span>
        </NavLink>
      ))}
    </div>
  )
}

export default Company

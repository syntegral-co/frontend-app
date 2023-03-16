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
    <>
      <div className='align-center flex flex-row justify-around gap-2'>
        {themes.map((theme) => (
          <NavLink
            key={theme.id}
            className='flex flex-col items-center justify-center text-center'
            to={`./themes/${theme.id}`}
          >
            <CircularProgress
              color={theme.color}
              percentage={Math.floor(Math.random() * 100)}
            >
              <p></p>
            </CircularProgress>
            <span className='badge mt-2'>{theme.name}</span>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Company

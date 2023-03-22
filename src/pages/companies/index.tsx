import { NavLink, useParams } from 'react-router-dom'
import { companies } from '../../state/data'
import { getThemesArray } from '../themes/types'
import { ICompany } from './types'
import Theme from '../../components/theme'
import Sidebar from '../../components/sidebar'
import ChatOutput from '../../components/chat-output'
import ChatInput from '../../components/chat-input'

function Company() {
  const { company } = useParams()

  const mockCompany = companies.find(
    (mockCompany: ICompany) => mockCompany.id === parseInt(company!)
  )

  if (!mockCompany) {
    return null
  }

  const themes = getThemesArray()

  return (
    <>
      <Sidebar />
      <div className='flex h-96 w-full flex-wrap justify-around gap-2'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='align-center flex w-full flex-row flex-wrap justify-around gap-2 rounded-md bg-base-200 px-4 py-8'>
            {themes.map((theme) => (
              <NavLink
                key={theme.id}
                className='relative flex flex-col items-center justify-center text-center'
                to={`/companies/${company}/themes/${theme.id}`}
              >
                <Theme company={mockCompany} theme={theme} />
              </NavLink>
            ))}
          </div>
        </div>
        <ChatOutput />
        <div className='h-14 w-full'>
          <ChatInput />
        </div>
      </div>
    </>
  )
}

export default Company

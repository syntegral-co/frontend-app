import { useCurrentCompany } from './hooks'
import { useThemes } from '../themes/hooks'
import { NavLink } from 'react-router-dom'
import Theme from '../../components/theme'
import Sidebar from '../../components/sidebar'
import ChatOutput from '../../components/chat-output'
import ChatInput from '../../components/chat-input'

function Company() {
  const company = useCurrentCompany()
  const themes = useThemes()

  if (!company) {
    return null
  }

  return (
    <>
      <Sidebar />
      <div className='flex h-full w-full flex-wrap justify-around gap-2'>
        <div className='flex h-1/2 w-full flex-col items-center justify-center bg-base-200'>
          <div className='align-center flex w-full flex-row flex-wrap justify-around gap-2 rounded-md px-4 py-8'>
            {themes.map((theme) => (
              <NavLink
                key={theme.id}
                className='relative flex flex-col items-center justify-center text-center'
                to={`/companies/${company.id}/themes/${theme.id}`}
              >
                <Theme company={company} theme={theme} />
              </NavLink>
            ))}
          </div>
        </div>
        <div className='h-1/2 w-full'>
          <ChatOutput />
          <ChatInput />
        </div>
      </div>
    </>
  )
}

export default Company

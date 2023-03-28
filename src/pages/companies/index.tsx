import { useCurrentCompany } from './hooks'
import { useCurrentTheme, useThemes } from '../themes/hooks'
import { NavLink } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import Theme from '../themes'
import ChatOutput from '../../components/chat-output'
import ChatInput from '../../components/chat-input'
import ImpactAreasToggles from '../../components/impact-areas'

function Company() {
  const company = useCurrentCompany()
  const themes = useThemes()
  const currentTheme = useCurrentTheme()

  if (!company) {
    return null
  }

  return (
    <>
      <Sidebar />
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex h-full w-full flex-wrap justify-around gap-2">
            <div className="relative flex h-auto w-full flex-col items-center justify-center bg-base-200">
              <div className="badge-accent badge absolute top-4 left-4 z-20 hover:bg-accent-focus">
                <label htmlFor="my-drawer" className="cursor-pointer text-xs">
                  Choose impact areas
                </label>
              </div>
              <div className="flex w-full flex-col flex-wrap items-center justify-around gap-2 rounded-md px-4 py-8 sm:flex-row">
                {themes.map((theme) => {
                  let classes = 'relative flex flex-col items-center justify-center text-center'

                  if (currentTheme) {
                    classes = 'relative flex-col items-center justify-center text-center hidden lg:flex'
                  }

                  if (currentTheme && currentTheme.id === theme.id) {
                    classes = 'relative flex flex-col items-center justify-center text-center'
                  }
                  return (
                    <NavLink key={theme.id} className={classes} to={`/companies/${company.id}/themes/${theme.id}`}>
                      <Theme company={company} theme={theme} />
                    </NavLink>
                  )
                })}
              </div>
            </div>
            <div className="h-1/2 w-full">
              <ChatOutput />
              <ChatInput />
            </div>
          </div>
        </div>
        <div className="drawer-side pb-8">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="flex flex-col flex-nowrap overflow-y-scroll bg-base-200 p-4">
            <ImpactAreasToggles />
          </div>
        </div>
      </div>
    </>
  )
}

export default Company

import { useCurrentTheme, useThemes } from './hooks'
import { useCurrentCompany } from '../hooks'
import ImpactAreasToggles from '../../../components/impact-areas'
import Sidebar from '../../../components/sidebar'
import Theme from './theme'

function Themes() {
  const themes = useThemes()
  const company = useCurrentCompany()
  const currentTheme = useCurrentTheme()

  return (
    <>
      <Sidebar />
      <div className="rounded-box w-full bg-base-200">
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {currentTheme && (
              <div className="badge-accent badge mt-4 ml-4 hover:bg-accent-focus">
                <label htmlFor="my-drawer" className="cursor-pointer text-xs">
                  Choose impact areas
                </label>
              </div>
            )}

            <div className="flex w-full flex-col flex-wrap items-center justify-around gap-2 rounded-md px-4 py-8 sm:flex-row">
              {themes
                .filter((theme) => {
                  if (!currentTheme) return true

                  return theme.id === currentTheme!.id
                })
                .map((theme) => {
                  let classes =
                    'relative flex flex-col items-center justify-center text-center'

                  if (currentTheme) {
                    classes =
                      'relative flex-col items-center justify-center text-center hidden lg:flex'
                  }

                  if (currentTheme && currentTheme.id === theme.id) {
                    classes =
                      'relative flex flex-col items-center justify-center text-center'
                  }
                  return (
                    <div key={theme.id} className={classes}>
                      <Theme company={company!} theme={theme} />
                    </div>
                  )
                })}
            </div>
          </div>
          {currentTheme && (
            <div className="drawer-side pb-8">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="flex flex-col flex-nowrap overflow-y-scroll bg-base-200 p-4">
                <ImpactAreasToggles />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Themes

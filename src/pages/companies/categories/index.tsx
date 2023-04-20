import { useCurrentCategory, useCategories } from './hooks'
import { useCurrentCompany } from '../hooks'
import ThemesToggles from '../../../components/themesToggles'
import Sidebar from '../../../components/sidebar'
import Category from './category'

function Categories() {
  const categories = useCategories()
  const company = useCurrentCompany()
  const currentCategory = useCurrentCategory()

  return (
    <>
      <Sidebar />
      <div className=" w-full bg-base-200">
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {currentCategory && (
              <div className="badge badge-accent mt-4 ml-4 hover:bg-accent-focus">
                <label htmlFor="my-drawer" className="cursor-pointer text-xs">
                  Choose themes
                </label>
              </div>
            )}

            <div className="flex w-full flex-col flex-wrap items-center justify-around gap-2  px-4 py-8 sm:flex-row">
              {categories
                .filter((category) => {
                  if (!currentCategory) return true

                  return category.id === currentCategory!.id
                })
                .map((theme) => {
                  let classes =
                    'relative flex flex-col items-center justify-center text-center'

                  if (currentCategory) {
                    classes =
                      'relative flex-col items-center justify-center text-center hidden lg:flex'
                  }

                  if (currentCategory && currentCategory.id === theme.id) {
                    classes =
                      'relative flex flex-col items-center justify-center text-center'
                  }
                  return (
                    <div key={theme.id} className={classes}>
                      <Category company={company!} category={theme} />
                    </div>
                  )
                })}
            </div>
          </div>
          {currentCategory && (
            <div className="drawer-side pb-8">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="flex flex-col flex-nowrap overflow-y-scroll bg-base-200 p-4">
                <ThemesToggles />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Categories

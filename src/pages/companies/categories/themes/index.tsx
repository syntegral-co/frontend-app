import { useCurrentCategory } from '../hooks'
import { NavLink } from 'react-router-dom'
import Sidebar from '../../../../components/sidebar'
import ThemesToggles from '../../../../components/themesToggles'

function Themes() {
  const currentCategory = useCurrentCategory()

  return (
    <>
      <Sidebar />
      <div className="flex h-full w-full flex-wrap justify-around gap-2">
        <div className="flex h-full w-full flex-col items-center bg-base-200">
          <div className="align-center flex w-full flex-row flex-wrap gap-2  px-4 py-8">
            <p className="text-xl text-primary-content">
              Choose your Preferences in the {currentCategory?.name} Dimension:
            </p>
            <div className="divider w-full"></div>
            <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-3">
              <ThemesToggles />
            </div>
            <NavLink
              className="btn-outline btn-primary btn mx-auto"
              to={`./score`}
            >
              Scores
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Themes

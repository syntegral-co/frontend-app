import { useCurrentCompany } from '../companies/hooks'
import Sidebar from '../../components/sidebar'
import { NavLink } from 'react-router-dom'
import ImpactAreasToggles from '../../components/impact-areas'

function ImpactAreas() {
  const company = useCurrentCompany()

  return (
    <>
      <Sidebar />
      <div className='flex h-full w-full flex-wrap justify-around gap-2'>
        <div className='flex h-full w-full flex-col items-center bg-base-200'>
          <div className='align-center flex w-full flex-row flex-wrap gap-2 rounded-md px-4 py-8'>
            <p className='text-xl text-primary-content'>
              Choose the impact areas you're interested in:
            </p>
            <div className='divider w-full'></div>
            <div className='grid w-full grid-cols-2 gap-2 lg:grid-cols-3'>
              <ImpactAreasToggles />
            </div>
            <NavLink
              className='btn-primary btn-outline btn mx-auto'
              to={'./themes'}
            >
              Scores
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImpactAreas

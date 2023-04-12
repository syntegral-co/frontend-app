import { atom } from 'recoil'
import { impactAreas, peopleImpactAreas } from '../../pages/areas/types'

const areas = [...impactAreas, ...peopleImpactAreas].map((area) => ({
  id: area.id,
  name: area.name,
  checked: false,
}))

export const impactAreasState = atom({
  key: 'impactAreas',
  default: areas,
})

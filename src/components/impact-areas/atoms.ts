import { atom } from 'recoil'
import {
  profitImpactAreas,
  peopleImpactAreas,
  planetImpactAreas,
} from '../../pages/companies/areas/types'

const areas = [
  ...planetImpactAreas,
  ...peopleImpactAreas,
  ...profitImpactAreas,
].map((area) => ({
  id: area.id,
  name: area.name,
  checked: false,
}))

export const impactAreasState = atom({
  key: 'impactAreas',
  default: areas,
})

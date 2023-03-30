import { atom } from 'recoil'
import { IChatMessage, IChatMessageLink } from '../components/chat-output/types'
import { impactAreas, peopleImpactAreas } from '../pages/areas/types'
import { themes } from '../pages/themes/types'

export const chatState = atom({
  key: 'chat',
  default: [] as IChatMessage[],
})

export const documentState = atom({
  key: 'document',
  default: null as IChatMessageLink | null,
})

export const drawerState = atom({
  key: 'drawer',
  default: false,
})

const areas = [...impactAreas, ...peopleImpactAreas].map((area) => ({
  id: area.id,
  name: area.name,
  checked: false,
}))

export const impactAreasState = atom({
  key: 'impactAreas',
  default: areas,
})

export const themesState = atom({
  key: 'themes',
  default: Object.values(themes).map((theme) => theme),
})

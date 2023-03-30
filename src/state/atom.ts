import { atom } from 'recoil'
import { IChatMessage } from '../components/chat-output/types'
import { impactAreas, peopleImpactAreas } from '../pages/areas/types'
import { themes } from '../pages/themes/types'

const chatMessages: IChatMessage[] = []

export const chatState = atom({
  key: 'chat',
  default: chatMessages,
})

export const documentState = atom({
  key: 'document',
  default: '',
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

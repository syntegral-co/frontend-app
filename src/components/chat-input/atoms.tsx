import { atom } from 'recoil'
import { IChatMessage } from '../chat-output/types'

export const chatState = atom({
  key: 'chat',
  default: [] as IChatMessage[],
})

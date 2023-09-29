import { atom } from 'recoil'
import { ChatMessage } from './types'

export const chatState = atom({
  key: 'chat',
  default: [] as ChatMessage[],
})

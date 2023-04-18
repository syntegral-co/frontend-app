import { atom } from 'recoil'
import { ChatMessage } from '../chat-output/types'

export const chatState = atom({
  key: 'chat',
  default: [] as ChatMessage[],
})

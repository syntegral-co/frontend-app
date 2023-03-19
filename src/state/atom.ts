import { atom } from 'recoil'
import { chatbot } from './data'

export const chatState = atom({
  key: 'chatState',
  default: chatbot,
})

export const drawerState = atom({
  key: 'drawerState',
  default: { isOpen: false },
})

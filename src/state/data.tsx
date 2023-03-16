import { ICompany } from '../pages/companies/types'
import { IChatMessage } from '../components/chat-output/types'

export const companies: ICompany[] = [
  {
    id: 'nike',
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/330px-Logo_NIKE.svg.png',
  },
  {
    id: 'apple',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/326px-Apple_logo_black.svg.png',
  },
]

export let chatbot: IChatMessage[] = [
  {
    author: 'bot',
    avatar: '/avatar.png',
    text: "It's over Anakin, I have the high ground.",
  },
  {
    author: 'current',
    avatar: null,
    text: 'You underestimate my power!',
  },
  {
    author: 'bot',
    avatar: '/avatar.png',
    text: 'It was said that you would, destroy the Sith, not join them.',
  },
  {
    author: 'bot',
    avatar: '/avatar.png',
    text: 'It was you who would bring balance to the Force',
  },
]

export function addChatMessage(message: IChatMessage) {
  chatbot.push(message)
}

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
    author: 'current',
    avatar: null,
    text: 'How is this company expanding learning opportunities for their employees and how are people impacted by their learning and development programs?',
  },
]

export function addChatMessage(message: IChatMessage) {
  chatbot.push(message)
}

import { ICompany } from '../pages/companies/types'
import { IChatMessage } from '../components/chat-output/types'

export const companies: ICompany[] = [
  { id: 1, name: 'BUA Cement Plc' },
  { id: 2, name: 'Dangote Group' },
  { id: 3, name: 'Guinness Nigeria' },
  { id: 4, name: 'Okomu Oil Palm PLC' },
  { id: 5, name: 'Presco PLC' },
  {
    id: 6,
    name: 'Seplat Energy Plc',
    themes: {
      purpose: 10,
      people: 30,
      profit: 50,
      planet: 80,
    },
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

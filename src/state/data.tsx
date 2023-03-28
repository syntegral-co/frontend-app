import { ICompany } from '../pages/companies/types';
import { IChatMessage } from '../components/chat-output/types';

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
      purpose: { score: 25 },
      people: {
        score: 60,
        impactAreas: {
          'food-and-security': 30,
          'education-and-child-care': 12,
          'womens-empowerment': 25,
          'affordable-housing': 58,
          'income-and-work': 10,
          'access-to-energy': 2,
          'youth-empowerment': 75,
          'lgbtq-empowerment': 84,
        },
      },
      profit: { score: 50 },
      planet: { score: 15 },
    },
  },
];

export let chatbot: IChatMessage[] = [
  {
    author: 'current',
    text: 'How is this company expanding learning opportunities for their employees and how are people impacted by their learning and development programs?',
  },
];

export function addChatMessage(message: IChatMessage) {
  chatbot.push(message);
}

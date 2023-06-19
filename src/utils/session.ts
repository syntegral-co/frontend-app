import { v4 as uuidv4 } from 'uuid'

const UserSession = {
  set: () => {
    const sessionId = uuidv4()
    localStorage.setItem('sessionId', sessionId)
  },
  get: () => localStorage.getItem('sessionId'),
  reset: () => {
    localStorage.removeItem('sessionId')
    const sessionId = uuidv4()
    localStorage.setItem('sessionId', sessionId)
  },
  remove: () => {
    localStorage.removeItem('sessionId')
  },
} as const

export default UserSession

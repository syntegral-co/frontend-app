import { describe, expect, test } from 'vitest'
import UserSession from './session'

//write tests to test UserSession
describe('UserSession', () => {
  test('Setting a session does not return a null ID', () => {
    UserSession.set()
    expect(localStorage.getItem('sessionId')).not.toBe(null)
  })
  test('Getting a session does not return a null ID', () => {
    UserSession.set()
    expect(UserSession.get()).not.toBe(null)
  })
  test('Resetting a session does not return a null ID', () => {
    UserSession.reset()
    expect(localStorage.getItem('sessionId')).not.toBe(null)
  })
  test('Removing a session returns a null ID', () => {
    UserSession.remove()
    expect(localStorage.getItem('sessionId')).toBe(null)
  })
})

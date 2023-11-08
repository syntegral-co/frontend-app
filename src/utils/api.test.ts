import { describe, expect, test, vi } from 'vitest'
import { callAPI } from './api'

describe('callAPI', () => {
  test('callAPI returns a valid response', async () => {
    const result = await vi.waitFor(async () => {
      const response = await callAPI(
        'https://jsonplaceholder.typicode.com/todos/1',
      )

      return response
    })

    expect(result).not.toBe(null)
  })
})

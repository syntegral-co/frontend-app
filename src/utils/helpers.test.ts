import { describe, expect, test } from 'vitest'
import { capitalize, formatReferences } from './helpers'

describe('Helpers', () => {
  test('Capitalize returns a capialized string', () => {
    const lowercaseString = 'lorem ipsum'
    expect(capitalize(lowercaseString)).toBe('Lorem ipsum')
  })

  describe('References formatting helpers', () => {
    test('Undefined references should be formatted as empty array', () => {
      expect(formatReferences(undefined)).toStrictEqual([])
    })

    test('String matrix should be formatted as a DocumentLink array', () => {
      const references = [['1', '2', 'Lorem ipsum']]
      expect(formatReferences(references)).toStrictEqual([
        { id: '1', page: '2', name: 'Lorem ipsum' },
      ])
    })
  })
})

import { describe, expect, test } from 'vitest'
import { capitalize, formatReferences, getThemeScore } from './helpers'

describe('Helpers', () => {
  describe('String formatting helpers', () => {
    test('Capitalize returns a capialized string', () => {
      const lowercaseString = 'lorem ipsum'
      expect(capitalize(lowercaseString)).toBe('Lorem ipsum')
    })
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

  describe('Themes helpers', () => {
    const themeId = 2
    const themeScores = [
      {
        assetId: 1,
        themeId: 1,
        score: 90,
      },
      {
        assetId: 1,
        themeId: 2,
        score: 100,
      },
    ]

    test('Return score of zero for non existing score', () => {
      expect(getThemeScore(3, themeScores)).toEqual(0)
    })

    test('Return correct theme score', () => {
      expect(getThemeScore(themeId, themeScores)).toEqual(100)
    })
  })
})

import { describe, expect, test } from 'vitest'
import {
  capitalize,
  decryptString,
  encryptString,
  formatReferences,
  getThemeScore,
  isSearchTermAnAsset,
} from './helpers'
import { Asset } from 'pages/assets/types'

describe('Helpers', () => {
  describe('String formatting helpers', () => {
    const lowercaseString = 'lorem ipsum'

    test('Capitalize does not return a lowercase string', () => {
      expect(capitalize(lowercaseString)).not.toBe('lorem ipsum')
    })

    test('Capitalize returns a capialized string', () => {
      expect(capitalize(lowercaseString)).toBe('Lorem ipsum')
    })

    describe('String encryption helpers', () => {
      test('Decrypted string equals to "🦄"', () => {
        const encryptedString = encryptString('🦄')
        const decryptedString = decryptString(encryptedString)
  
        expect(decryptedString).toEqual('🦄')
      })
    })
  })

  describe('Asset search helper', () => {
    test('String "ipsum" is not a valid asset name', () => {
      expect(
        isSearchTermAnAsset(
          {
            id: 1,
            assetClassId: 1,
            name: 'Lorem',
          } as Asset,
          'ipsum',
        ),
      ).toBeFalsy()
    })

    test('String "Lorem" is a valid asset name', () => {
      expect(
        isSearchTermAnAsset(
          {
            id: 1,
            assetClassId: 1,
            name: 'Lorem',
          } as Asset,
          'Lorem',
        ),
      ).toBeTruthy()
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

/* c8 ignore next 9 */
import { AES, enc } from 'crypto-js'
import { DocumentLink } from '../components/document-modal/types'
import { Asset, ThemeScore } from '../pages/assets/types'

export function capitalize(string: string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1, string.length)}`
}

export function encryptString(stringToEncrypt: string) {
  return AES.encrypt(
    stringToEncrypt,
    import.meta.env.VITE_CRYPTO_SECRET_KEY,
  ).toString()
}

export function decryptString(encryptedString: string) {
  const bytes = AES.decrypt(
    encryptedString,
    import.meta.env.VITE_CRYPTO_SECRET_KEY,
  )

  return bytes.toString(enc.Utf8)
}

export function isSearchTermAnAsset(
  asset: Asset,
  searchTerm: string,
): asset is Asset {
  return asset.name.toLowerCase().includes(searchTerm.toLowerCase())
}

export function formatReferences(
  references: string[][] | undefined,
): DocumentLink[] {
  if (!references) return []

  return references.map((reference) => ({
    id: reference[0],
    page: reference[1],
    name: reference[2],
  }))
}

export function getThemeScore(themeId: number, scores: ThemeScore[]) {
  const themeScore = scores.find((score) => score.themeId === themeId)

  if (!themeScore) return 0

  return themeScore.score
}

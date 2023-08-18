/* c8 ignore next 7 */
import { DocumentLink } from '../components/document-modal/types'
import { ThemeScore } from '../pages/assets/types'

export function assertUnreachable(x: never): never {
  throw new Error('Unreachable code!')
}

export function capitalize(string: string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1, string.length)}`
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

/* c8 ignore next 3 */
export function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

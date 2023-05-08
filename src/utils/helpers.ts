import { DocumentLink } from '../components/document-drawer/types'

export function assertUnreachable(x: never): never {
  throw new Error('Unreachable code!')
}

export function capitalize(string: string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1, string.length)}`
}

export function formatReferences(references: string[][]): DocumentLink[] {
  if (!references) return []

  return references.map((reference) => ({
    id: reference[0],
    page: reference[1],
    name: reference[2],
  }))
}

export function getThemeScore(themeId: number, scores: any[]) {
  const themeScore = scores.find((score) => score.themeId === themeId)

  if (!themeScore) return 0

  return themeScore.score
}

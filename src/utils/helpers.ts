import { DocumentLink } from '../components/drawer/types'

export function formatReferences(references: string[][]): DocumentLink[] {
  if (!references) return []

  return references.map((reference) => ({
    id: reference[0],
    page: reference[1],
    name: reference[2],
  }))
}

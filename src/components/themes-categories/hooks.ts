import { useSearchParams } from 'react-router-dom'

export function useCurrentCategory() {
  const [params] = useSearchParams()
  const category = parseInt(params.get('category') as string) || 5

  return category
}

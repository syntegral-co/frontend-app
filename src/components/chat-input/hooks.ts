import { useQuery } from '@tanstack/react-query'
import { chat } from '../../utils/api'

export function useChatBot() {
  const { data, refetch, fetchStatus } = useQuery({
    queryKey: ['chatbot', 'test'],
    queryFn: ({ queryKey }) => chat('test'),
    enabled: false,
  })

  return { data, refetch, fetchStatus }
}

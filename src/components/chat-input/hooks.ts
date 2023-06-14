import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useIsFetching, useQueries, useQuery } from '@tanstack/react-query'
import { useCurrentCompany, useIsSwigcoDemo } from '../../pages/companies/hooks'
import { chatState } from './atoms'
import { chat, getChatMetrics } from '../../utils/api'
import { formatReferences } from '../../utils/helpers'
import { ChatReply } from './types'
import { ChatMessage } from '../chat-output/types'

export function useChatBot() {
  const [chatInput, setChatInput] = useState<string>('')
  const [chatMessages, setChatMessages] = useRecoilState(chatState)
  const isSwigcoDemo = useIsSwigcoDemo()
  const currentCompany = useCurrentCompany()

  const {
    status,
    data: chatbotReply,
  }: {
    status: string
    data: ChatReply | undefined
  } = useQuery({
    queryKey: ['chatbot', chatInput, currentCompany!.id],
    queryFn: () => chat(chatInput, currentCompany!.id),
    staleTime: Infinity,
    enabled: chatInput !== '',
  })

  const [irisMetricsQuery, sdgMetricsQuery] = useQueries({
    queries: [
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'iris'],
        queryFn: () => getChatMetrics('iris', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          !isSwigcoDemo &&
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'sdg'],
        queryFn: () => getChatMetrics('sdg', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          !isSwigcoDemo &&
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
    ],
  })

  const isLoading = useIsFetching({ queryKey: ['chatbot'] })
  const isMetricsLoading = useIsFetching({ queryKey: ['chatbot-metrics'] })

  useEffect(() => {
    if (status !== 'success' || !chatbotReply) return

    let newMessage: ChatMessage = {
      header: chatbotReply!.categories,
      author: 'bot',
      text: chatbotReply!.answer,
    }

    if (chatbotReply.status === 'successful') {
      const references = formatReferences(chatbotReply!.references!.list)

      newMessage.links = references
    }

    setChatMessages([...chatMessages, newMessage])
  }, [chatbotReply, status])

  useEffect(() => {
    if (irisMetricsQuery.status !== 'success' || !irisMetricsQuery.data) return

    const answer = irisMetricsQuery!.data!.metrics
    const newMessage: ChatMessage = {
      header: 'IRIS+ Indicators',
      author: 'bot',
      text: answer,
      collapsible: true,
    }

    setChatMessages([...chatMessages, newMessage])
  }, [irisMetricsQuery.status, irisMetricsQuery.data])

  useEffect(() => {
    if (sdgMetricsQuery.status !== 'success' || !sdgMetricsQuery.data) return

    const answer = sdgMetricsQuery!.data!.metrics
    const newMessage = {
      header: 'SDG Indicators',
      author: 'bot',
      text: answer,
      collapsible: true,
    }

    setChatMessages([...chatMessages, newMessage])
  }, [sdgMetricsQuery.status, sdgMetricsQuery.data])

  function sendMessage(text: string) {
    if (text === '') return
    const newMessage = {
      author: 'current',
      text,
    }
    setChatMessages([...chatMessages, newMessage])
    setChatInput(text)
  }

  return {
    chatMessages,
    sendMessage,
    isLoading,
    isMetricsLoading,
  }
}

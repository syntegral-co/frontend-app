import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useIsFetching, useQueries, useQuery } from '@tanstack/react-query'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useCurrentTheme } from '../../pages/companies/areas/themes/hooks'
import { chatState } from './atoms'
import { chat, chatContext, chatMetrics } from '../../utils/api'
import { formatReferences } from '../../utils/helpers'
import { IChatReply } from './types'
import { IChatMessage } from '../chat-output/types'

export function useChatBot() {
  const [chatInput, setChatInput] = useState<string>('')
  const [chatMessages, setChatMessages] = useRecoilState(chatState)
  const currentCompany = useCurrentCompany()
  const currentTheme = useCurrentTheme()

  const {
    status,
    data: chatbotReply,
  }: {
    status: string
    data: IChatReply | undefined
  } = useQuery({
    queryKey: ['chatbot', chatInput],
    queryFn: () => chat(chatInput, currentCompany!.id),
    staleTime: Infinity,
    enabled: chatInput !== '',
  })

  const [contextQuery, irisMetricsQuery, sdgMetricsQuery] = useQueries({
    queries: [
      {
        queryKey: ['chatbot-context', chatInput, chatbotReply],
        queryFn: () =>
          chatContext(chatInput, currentTheme!.id, chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'iris'],
        queryFn: () => chatMetrics('iris', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'sdg'],
        queryFn: () => chatMetrics('sdg', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
    ],
  })

  const isLoading = useIsFetching({ queryKey: ['chatbot'] })
  const isContextLoading = useIsFetching({ queryKey: ['chatbot-context'] })
  const isMetricsLoading = useIsFetching({ queryKey: ['chatbot-metrics'] })

  useEffect(() => {
    if (status !== 'success' || !chatbotReply) return

    let newMessage: IChatMessage = {
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
    if (contextQuery.status !== 'success' || !contextQuery.data) return

    const answer = contextQuery.data!.context_answer

    let newMessage: IChatMessage = {
      header: 'Company Impact Assessment',
      author: 'bot',
      text: answer,
      collapsible: true,
    }

    if (
      contextQuery.data!.context_references &&
      contextQuery.data!.context_references.list
    ) {
      const references = formatReferences(
        contextQuery.data.context_references.list,
      )

      newMessage.links = references
    }

    setChatMessages([...chatMessages, newMessage])
  }, [contextQuery.status, contextQuery.data])

  useEffect(() => {
    if (irisMetricsQuery.status !== 'success' || !irisMetricsQuery.data) return

    const answer = irisMetricsQuery!.data!.metrics
    const newMessage: IChatMessage = {
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
    isContextLoading,
    isMetricsLoading,
  }
}

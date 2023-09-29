import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  useIsFetching,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useCurrentAssetClass } from '../asset-class-switcher/hooks'
import { useCurrentAsset } from '../../pages/assets/hooks'
import { chatState } from './atoms'
import { chat, getChatMetrics } from './api'
import { formatReferences } from '../../utils/helpers'
import { ChatMessage, ChatRequest } from './types'
import UserSession from '../../utils/session'

export function useChatBot() {
  const [chatInput, setChatInput] = useState<string>('')
  const [chatMessages, setChatMessages] = useRecoilState(chatState)
  const currentAssetClass = useCurrentAssetClass()
  const currentAsset = useCurrentAsset()
  const queryClient = useQueryClient()

  const { status, data: chatbotReply }: ChatRequest = useQuery({
    queryKey: ['chatbot', chatInput, currentAsset!.id],
    queryFn: () => chat(chatInput, currentAsset!.id),
    staleTime: Infinity,
    enabled: chatInput !== '',
    refetchOnWindowFocus: false,
  })

  const [irisMetricsQuery, sdgMetricsQuery] = useQueries({
    queries: [
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'iris'],
        queryFn: () => getChatMetrics('iris', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          currentAssetClass!.id !== 3 &&
          currentAssetClass!.id !== 4 &&
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
      {
        queryKey: ['chatbot-metrics', chatbotReply, 'sdg'],
        queryFn: () => getChatMetrics('sdg', chatbotReply!.answer),
        staleTime: Infinity,
        enabled:
          currentAssetClass!.id !== 3 &&
          currentAssetClass!.id !== 4 &&
          status === 'success' &&
          chatbotReply &&
          chatbotReply.status === 'successful',
      },
    ],
  })

  const isLoading = useIsFetching({ queryKey: ['chatbot'] })
  const isMetricsLoading = useIsFetching({ queryKey: ['chatbot-metrics'] })

  useEffect(() => {
    setChatInput('')
    setChatMessages([])
    queryClient.removeQueries()
  }, [currentAsset!.id])

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

  function startNewChat() {
    UserSession.reset()
    setChatInput('')
    setChatMessages([])
    queryClient.removeQueries()
  }

  return {
    chatMessages,
    sendMessage,
    startNewChat,
    isLoading,
    isMetricsLoading,
  }
}

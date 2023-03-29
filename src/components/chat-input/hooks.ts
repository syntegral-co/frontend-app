import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useIsFetching, useQueries, useQuery } from '@tanstack/react-query'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useCurrentTheme } from '../../pages/themes/hooks'
import { chatState } from '../../state/atom'
import { chat, chatContext, chatMetrics } from '../../utils/api'
import { IChatReply } from './types'

function formatReferences(references: string[][]) {
  return references.map((reference) => ({
    id: reference[0],
    page: reference[1],
    name: reference[2],
  }))
}

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

  const [contextQuery, metricsQuery] = useQueries({
    queries: [
      {
        queryKey: ['chatbot-context', chatInput, chatbotReply],
        queryFn: () => chatContext(chatInput, currentTheme!.id, chatbotReply!.answer),
        staleTime: Infinity,
        enabled: status === 'success',
      },
      {
        queryKey: ['chatbot-metrics', chatbotReply],
        queryFn: () => chatMetrics(chatbotReply!.answer),
        staleTime: Infinity,
        enabled: status === 'success',
      },
    ],
  })

  const isLoading = useIsFetching({ queryKey: ['chatbot'] })
  const isContextLoading = useIsFetching({ queryKey: ['chatbot-context'] })
  const isMetricsLoading = useIsFetching({ queryKey: ['chatbot-metrics'] })

  useEffect(() => {
    if (status !== 'success' || !chatbotReply || chatbotReply.status !== 'successful') return

    const references = formatReferences(chatbotReply!.references!.list)

    const newMessage = {
      header: chatbotReply!.categories,
      author: 'bot',
      text: chatbotReply!.answer,
      links: references,
    }

    setChatMessages([...chatMessages, newMessage])
  }, [chatbotReply, status])

  useEffect(() => {
    if (contextQuery.status !== 'success' || !contextQuery.data) return

    //const references = formatReferences(contextQuery.data!.context_references!.list)
    const answer = contextQuery.data!.context_answer

    const newMessage = {
      author: 'bot',
      text: answer,
    }

    setChatMessages([...chatMessages, newMessage])
  }, [contextQuery.status, contextQuery.data])

  useEffect(() => {
    if (metricsQuery.status !== 'success' || !metricsQuery.data) return

    const answer = metricsQuery!.data!.metrics
    const newMessage = {
      author: 'bot',
      text: answer,
    }

    setChatMessages([...chatMessages, newMessage])
  }, [metricsQuery.status, metricsQuery.data])

  function sendMessage(text: string) {
    if (text === '') return
    const newMessage = {
      author: 'current',
      text,
    }
    setChatMessages([...chatMessages, newMessage])
    setChatInput(text)
  }

  return { chatMessages, sendMessage, isLoading, isContextLoading, isMetricsLoading }
}

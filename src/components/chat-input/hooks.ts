import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useIsFetching, useQuery } from '@tanstack/react-query'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useCurrentTheme } from '../../pages/themes/hooks'
import { chatState } from '../../state/atom'
import { chat, chatContext } from '../../utils/api'
import { IChatContextReply, IChatReply } from './types'

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

  const { status: contextStatus, data: chatbotContextReply }: { status: string; data: IChatContextReply | undefined } =
    useQuery({
      queryKey: ['chatbot-context', chatInput, chatbotReply],
      queryFn: () => chatContext(chatInput, currentTheme!.id, chatbotReply!.answer),
      staleTime: Infinity,
      enabled: status === 'success',
    })

  const isLoading = useIsFetching({ queryKey: ['chatbot'] })
  const isContextLoading = useIsFetching({ queryKey: ['chatbot-context'] })

  useEffect(() => {
    if (status === 'success') {
      const answer = `${chatbotReply!.answer}<br />References: ${chatbotReply!.references!.text}`
      const newMessage = {
        author: 'bot',
        text: answer,
      }

      setChatMessages([...chatMessages, newMessage])
    }
  }, [chatbotReply, status])

  useEffect(() => {
    if (contextStatus === 'success') {
      const answer = `${chatbotContextReply!.context_answer}<br />References: ${
        chatbotContextReply!.context_references!.text
      }`
      const newMessage = {
        author: 'bot',
        text: answer,
      }

      setChatMessages([...chatMessages, newMessage])
    }
  }, [chatbotContextReply, contextStatus])

  function sendMessage(text: string) {
    if (text === '') return
    const newMessage = {
      author: 'current',
      text,
    }
    setChatMessages([...chatMessages, newMessage])
    setChatInput(text)
  }

  return { chatMessages, sendMessage, isLoading: isLoading || isContextLoading }
}

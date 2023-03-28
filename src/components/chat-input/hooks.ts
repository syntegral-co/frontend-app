import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import { useCurrentCompany } from '../../pages/companies/hooks';
import { chatState } from '../../state/atom';
import { chat } from '../../utils/api';
import { IChatReply } from './types';

export function useChatBot() {
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useRecoilState(chatState);
  const currentCompany = useCurrentCompany();
  const {
    status,
    data,
  }: {
    status: string;
    data: IChatReply | undefined;
  } = useQuery({
    queryKey: ['chatbot', chatInput],
    queryFn: () => chat(chatInput, currentCompany!.id),
    staleTime: Infinity,
    enabled: chatInput !== '',
  });
  const isLoading = useIsFetching({ queryKey: ['chatbot'] });

  useEffect(() => {
    if (status === 'success') {
      console.log('data: ', data);
      const answer = `${data!.answer}<br />References: ${data!.references!.text}`;
      const newMessage = {
        author: 'bot',
        text: answer,
      };

      setChatMessages([...chatMessages, newMessage]);
    }
  }, [data, status]);

  function sendMessage(text: string) {
    if (text === '') return;
    const newMessage = {
      author: 'current',
      text,
    };
    setChatMessages([...chatMessages, newMessage]);
    setChatInput(text);
  }

  return { chatMessages, sendMessage, isLoading };
}

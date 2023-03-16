import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'
import { useChatBot } from '../chat-input/hooks'

function ChatOutput() {
  const { user } = useAuth0()
  const { chatBotMessages } = useChatBot()

  return (
    <div className='flex max-h-96 w-full flex-col justify-between rounded-md p-4 duration-300'>
      <Outlet />
      <div className='divider'></div>
      <div className='mt-4 overflow-y-scroll rounded-md pr-4'>
        {chatBotMessages.map(({ author, avatar, text }, index) => {
          const chatClasses =
            author === 'bot' ? 'chat chat-start' : 'chat chat-end'
          return (
            <div key={index} className={chatClasses}>
              <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                  <img src={avatar || user?.picture} />
                </div>
              </div>
              <div className='chat-bubble'>{text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatOutput

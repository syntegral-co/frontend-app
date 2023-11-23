import { useAuth0 } from '@auth0/auth0-react'
import { ChatMessage } from './types'
import { Interweave } from 'interweave'
import References from 'components/references'
import logo from 'assets/images/syntegral-logo.webp'

type ChatMessageProps = {
  message: ChatMessage
}

function ChatMessage({ message }: ChatMessageProps) {
  const { user } = useAuth0()

  const { header, author, text, links, collapsible } = message

  const chatClasses = author === 'bot' ? 'chat chat-start' : 'chat chat-end'
  const chatAvatar = author === 'bot' ? logo : user?.picture

  const messageContent = (
    <>
      <Interweave content={text} />
      {links && (
        <>
          <p className="mt-4">References:</p>
          <ol className="list-none pl-2">
            <References documents={links} />
          </ol>
        </>
      )}
    </>
  )

  const messageWrapper = collapsible ? (
    <details>
      <summary className="font-2xl mb-4 cursor-pointer font-bold text-accent">
        {header}
      </summary>
      {messageContent}
    </details>
  ) : (
    <>
      {header && (
        <p className="font-2xl mb-4 font-bold text-accent">{header}</p>
      )}
      {messageContent}
    </>
  )

  return (
    <div className={chatClasses}>
      <div className="avatar chat-image">
        <div className="mask mask-hexagon w-10 rounded-full">
          <img src={chatAvatar} alt={`${user!.name} avatar`} />
        </div>
      </div>
      <div className="chat-bubble bg-base-100 text-primary-content">
        {messageWrapper}
      </div>
    </div>
  )
}

export default ChatMessage

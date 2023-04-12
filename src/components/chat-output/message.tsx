import { useAuth0 } from '@auth0/auth0-react'
import { Interweave } from 'interweave'
import { useRecoilState } from 'recoil'
import { useDrawer } from '../drawer/hooks'
import { documentState } from './atoms'
import { IChatMessage, IChatMessageLink } from './types'
import logo from '/assets/images/syntegral.svg'

interface IChatMessageProps {
  message: IChatMessage
}

function ChatMessage({ message }: IChatMessageProps): JSX.Element {
  const { user } = useAuth0()
  const [document, setDocument] = useRecoilState(documentState)
  const { isDrawerOpen, toggleDrawer } = useDrawer()

  const { header, author, text, links, collapsible } = message

  const chatClasses = author === 'bot' ? 'chat chat-start' : 'chat chat-end'
  const chatAvatar = author === 'bot' ? logo : user?.picture

  function documentLinkHandler(link: IChatMessageLink) {
    if (!document || document.id !== link.id) {
      setDocument(link)
    }
    if (!isDrawerOpen) {
      toggleDrawer()
    }
  }

  const messageContent = (
    <>
      <Interweave content={text} />
      {links && (
        <>
          <p className="mt-4">References:</p>
          <ol className="list-none pl-2">
            {links.map((link, index) => (
              <li className="cursor-pointer" onClick={() => documentLinkHandler(link)} key={index}>
                📄 <span className="italic text-secondary hover:underline">{link.name}</span>
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  )

  const messageWrapper = collapsible ? (
    <details>
      <summary className="font-2xl mb-4 cursor-pointer font-bold text-accent">{header}</summary>
      {messageContent}
    </details>
  ) : (
    <>
      {header && <p className="font-2xl mb-4 font-bold text-accent">{header}</p>}
      {messageContent}
    </>
  )

  return (
    <div className={chatClasses}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={chatAvatar} />
        </div>
      </div>
      <div className="chat-bubble bg-base-100 text-primary-content">{messageWrapper}</div>
    </div>
  )
}

export default ChatMessage

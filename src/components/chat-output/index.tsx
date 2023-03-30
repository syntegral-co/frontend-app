import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useCurrentCompany } from '../../pages/companies/hooks'
import { useChatBot } from '../chat-input/hooks'
import { useRecoilState } from 'recoil'
import { useDrawer } from '../drawer/hooks'
import { Interweave } from 'interweave'
import DocumentDrawer from '../drawer'
import Loader from '../loader'
import logo from '/assets/images/syntegral.svg'
import { IChatMessage, IChatMessageLink } from './types'
import { documentState } from '../../state/atoms'

function ChatOutput() {
  const { user } = useAuth0()
  const company = useCurrentCompany()
  const { chatMessages, isLoading, isContextLoading, isMetricsLoading } = useChatBot()
  const [document, setDocument] = useRecoilState(documentState)
  const { isDrawerOpen, toggleDrawer } = useDrawer()

  function documentLinkHandler(link: IChatMessageLink) {
    if (!document || document.id !== link.id) {
      setDocument(link)
    }
    if (!isDrawerOpen) {
      toggleDrawer()
    }
  }

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-md p-4 duration-300">
      <Outlet />
      <DocumentDrawer />
      <div className="divider"></div>
      <div className="mt-4 h-full overflow-y-scroll rounded-md pr-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <div className="chat-bubble bg-base-200 text-primary-content">
            Company name: {company!.name}. Overall score: 125.
            <br />
            Click on one of the 4 themes to see more data.
          </div>
        </div>
        {chatMessages.map(({ header, author, text, links }: IChatMessage, index: number) => {
          const chatClasses = author === 'bot' ? 'chat chat-start' : 'chat chat-end'
          const chatAvatar = author === 'bot' ? logo : user?.picture
          return (
            <div key={index} className={chatClasses}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={chatAvatar} />
                </div>
              </div>
              <div className="chat-bubble bg-base-200 text-primary-content">
                {header && <p className="font-2xl mb-4 font-bold text-accent">{header}</p>}
                <Interweave content={text} />
                {links && (
                  <>
                    <p className="mt-4">References:</p>
                    <ol className="list-disc pl-4">
                      {links.map((link, index) => (
                        <li
                          className="cursor-pointer hover:underline"
                          onClick={() => documentLinkHandler(link)}
                          key={index}
                        >
                          {link.name}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            </div>
          )
        })}
        {(isLoading > 0 || isContextLoading > 0 || isMetricsLoading > 0) && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </div>
            <div className="chat-bubble bg-base-200">
              {(isContextLoading > 0 || isMetricsLoading > 0) && (
                <>
                  <p>
                    Please wait, I am searching for similar projects and relevant metrics on my research DB related to
                    your question...
                  </p>
                  <br />
                </>
              )}
              <Loader />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatOutput

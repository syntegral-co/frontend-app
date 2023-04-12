import { useCurrentCompany } from '../../pages/companies/hooks'
import { useChatBot } from '../chat-input/hooks'
import { Outlet } from 'react-router-dom'
import ChatMessage from './message'
import ChatInput from '../chat-input'
import DocumentDrawer from '../drawer'
import Loader from '../loader'
import logo from '/assets/images/syntegral.svg'

function ChatOutput() {
  const company = useCurrentCompany()
  const { chatMessages, isLoading, isContextLoading, isMetricsLoading } = useChatBot()

  return (
    <div className="max-height-screen flex h-full w-full flex-col justify-between rounded-md p-4">
      <Outlet />
      <DocumentDrawer />
      <div className="mt-4 overflow-y-scroll rounded-md pr-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <div className="chat-bubble bg-base-100 text-primary-content">
            Company name: {company!.name}. Overall score: 125.
            <br />
            Click on one of the 4 themes to see more data.
          </div>
        </div>
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {(isLoading > 0 || isContextLoading > 0 || isMetricsLoading > 0) && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </div>
            <div className="chat-bubble bg-base-100">
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
      <ChatInput />
    </div>
  )
}

export default ChatOutput

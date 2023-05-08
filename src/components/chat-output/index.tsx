import { useCurrentCompany } from '../../pages/companies/hooks'
import { useChatBot } from '../chat-input/hooks'
import { Outlet } from 'react-router-dom'
import ChatMessage from './message'
import ChatInput from '../chat-input'
import Loader from '../loader'
import logo from '/assets/images/syntegral.svg'

function ChatOutput() {
  const company = useCurrentCompany()
  const { chatMessages, isLoading, isContextLoading, isMetricsLoading } =
    useChatBot()

  return (
    <div className="max-height-screen flex h-full w-full flex-col justify-between p-4">
      <Outlet />
      <div className="mt-4 overflow-y-scroll pr-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="mask mask-hexagon w-10 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <div className="chat-bubble bg-base-100 text-primary-content">
            Hello! Ask me anything you'd like to know about {company!.name}!
          </div>
        </div>
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {(isLoading > 0 || isContextLoading > 0 || isMetricsLoading > 0) && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="mask mask-hexagon w-10 rounded-full">
                <img src={logo} />
              </div>
            </div>
            <div className="chat-bubble bg-base-100">
              {(isContextLoading > 0 || isMetricsLoading > 0) && (
                <>
                  <p>
                    Please wait, I am searching for similar projects and
                    relevant metrics on my research DB related to your
                    question...
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

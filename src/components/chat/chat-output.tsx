import { useCurrentAsset } from 'pages/assets/hooks'
import { useChatBot } from 'components/chat/hooks'
import Loader from 'components/loader'
import Icon from 'components/icon'
import ChatMessage from './chat-message'
import ChatInput from 'components/chat/chat-input'
import logo from 'assets/images/syntegral.svg'

function ChatOutput() {
  const currentAsset = useCurrentAsset()
  const { chatMessages, isLoading, isMetricsLoading } = useChatBot()

  return (
    <div className="max-height-screen flex h-full w-full md:w-2/3 lg:w-1/3 flex-col justify-between p-4 bg-base-200 text-left">
      <div className="absolute top-4 right-4 h-10 w-10">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button hover:text-primary flex items-center justify-center cursor-pointer"
        >
          <Icon icon="cross" size={15} />
        </label>
      </div>
      <div className="mt-4 overflow-y-scroll pr-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="mask mask-hexagon w-10 rounded-full">
              <img src={logo} alt="Chatbot avatar" />
            </div>
          </div>
          <div className="chat-bubble bg-base-100 text-primary-content">
            Hello! Ask me anything you'd like to know about {currentAsset!.name}
            !
          </div>
        </div>
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {(isLoading > 0 || isMetricsLoading > 0) && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="mask mask-hexagon w-10 rounded-full">
                <img src={logo} alt="Chatbot avatar" />
              </div>
            </div>
            <div className="chat-bubble bg-base-100">
              {isMetricsLoading > 0 && (
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

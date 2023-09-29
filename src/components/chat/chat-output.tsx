import { useCurrentAsset } from 'pages/assets/hooks'
import { useChatBot } from 'components/chat/hooks'
import ChatInput from 'components/chat/chat-input'
import Loader from 'components/loader'
import Icon from 'components/icon'
import ChatMessage from './chat-message'
import logo from 'assets/images/syntegral.svg'

function ChatOutput() {
  const currentAsset = useCurrentAsset()
  const { chatMessages, isLoading, isMetricsLoading } = useChatBot()

  return (
    <>
      <label
        htmlFor="my-drawer-4"
        className="absolute top-0 right-0 drawer-button btn btn-link z-10"
      >
        <Icon icon="cross" size={10} />
      </label>
      <div className="max-height-screen flex h-full w-full sm:w-2/3 md:w-1/3 flex-col justify-between p-4 bg-base-200">
        <div className="mt-4 overflow-y-scroll pr-4">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="mask mask-hexagon w-10 rounded-full">
                <img src={logo} alt="Chatbot avatar" />
              </div>
            </div>
            <div className="chat-bubble bg-base-100 text-primary-content">
              Hello! Ask me anything you'd like to know about{' '}
              {currentAsset!.name}!
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
    </>
  )
}

export default ChatOutput

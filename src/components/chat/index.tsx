import Icon from 'components/icon'
import ChatOutput from './chat-output'

function Chat() {
  return (
    <div
      className="drawer drawer-end h-16 w-16 flex items-center justify-center fixed bottom-8 right-8 rounded-full group bg-base-100 hover:bg-primary transition-colors ease-in-out tooltip tooltip-accent tooltip-left"
      data-tip="Open chatbot"
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button group-hover:text-base-100 flex items-center justify-center cursor-pointer"
        >
          <Icon icon="bubbles" size={30} />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ChatOutput />
      </div>
    </div>
  )
}

export default Chat

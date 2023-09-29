import Icon from 'components/icon'
import ChatOutput from './chat-output'

function Chat() {
  return (
    <div className="drawer drawer-end h-20 w-20 flex items-center justify-center absolute bottom-0 right-0">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-circle hover:btn-primary tooltip tooltip-accent tooltip-left flex items-center justify-center"
          data-tip="Open chatbot"
        >
          <Icon icon="bubbles" size={20} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ChatOutput />
      </div>
    </div>
  )
}

export default Chat

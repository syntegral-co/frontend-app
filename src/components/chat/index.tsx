import Icon from 'components/icon'
import ChatOutput from './chat-output'

function Chat() {
  return (
    <div
      className="group drawer drawer-end tooltip tooltip-accent tooltip-left fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-base-100 transition-colors ease-in-out hover:bg-primary"
      data-tip="Open chatbot"
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button flex cursor-pointer items-center justify-center group-hover:text-base-100"
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

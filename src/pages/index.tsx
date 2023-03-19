import Sidebar from '../components/sidebar'
import ChatOutput from '../components/chat-output'
import ChatInput from '../components/chat-input'

function Demo() {
  return (
    <div className='flex h-full gap-4'>
      <Sidebar />
      <div className='flex h-96 w-full flex-wrap justify-around gap-2'>
        <ChatOutput />
        <div className='h-14 w-full'>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default Demo

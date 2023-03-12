import { Outlet } from 'react-router-dom'
import Watchlist from '../../components/watchlist'
import Sidebar from '../../components/sidebar'
import ChatInput from '../../components/chat-input'

function Demo() {
  return (
    <div className='flex gap-4'>
      <Sidebar />
      <div className='flex h-96 w-full flex-wrap justify-between gap-2'>
        <div className='h-44 w-full rounded-md bg-gray-800 p-4'>
          <Watchlist />
        </div>
        <div className='h-64 w-full rounded-md bg-gray-800 p-4 text-white'>
          <Outlet />
        </div>
        <div className='h-14 w-full bg-gray-800'>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default Demo

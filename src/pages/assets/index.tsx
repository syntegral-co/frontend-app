import { Outlet } from 'react-router-dom'
import Chat from 'components/chat'
import { useCurrentAsset } from './hooks'

function Asset() {
  const asset = useCurrentAsset()

  if (!asset) {
    return null
  }

  return (
    <div className="w-full">
      <Outlet />
      <Chat />
    </div>
  )
}

export default Asset

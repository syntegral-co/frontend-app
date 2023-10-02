import { Outlet } from 'react-router-dom'
import Chat from 'components/chat'
import { useCurrentAsset } from './hooks'

function Asset() {
  const asset = useCurrentAsset()

  if (!asset) {
    return null
  }

  return (
    <>
      <Outlet />
      <Chat />
    </>
  )
}

export default Asset

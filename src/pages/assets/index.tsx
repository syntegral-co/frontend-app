import { useCurrentAsset } from './hooks'
import DocumentModal from '../../components/document-modal'
import ChatOutput from '../../components/chat-output'

function Asset() {
  const asset = useCurrentAsset()

  if (!asset) {
    return null
  }

  return (
    <div className=" w-full bg-base-200">
      <DocumentModal />
      <ChatOutput />
    </div>
  )
}

export default Asset

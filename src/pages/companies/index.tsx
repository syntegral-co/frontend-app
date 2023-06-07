import { useCurrentCompany } from './hooks'
import DocumentModal from '../../components/document-modal'
import ChatOutput from '../../components/chat-output'

function Company() {
  const company = useCurrentCompany()

  if (!company) {
    return null
  }

  return (
    <div className=" w-full bg-base-200">
      <DocumentModal />
      <ChatOutput />
    </div>
  )
}

export default Company

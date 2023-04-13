import { useCurrentCompany } from './hooks'
import Sidebar from '../../components/sidebar'
import ChatOutput from '../../components/chat-output'

function Company() {
  const company = useCurrentCompany()

  if (!company) {
    return null
  }

  return (
    <>
      <Sidebar />
      <div className="rounded-box w-full bg-base-200">
        <ChatOutput />
      </div>
    </>
  )
}

export default Company

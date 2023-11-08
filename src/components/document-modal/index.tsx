import { useDocumentModal } from './hooks'
import { Link } from 'react-router-dom'
import Spinner from 'components/spinner'

function DocumentModal() {
  const { documentId, documentPage, documentUrl, status, fetchStatus } =
  useDocumentModal()
  
  if (!documentId || !documentPage) return <></>

  return (
    <div className="fixed left-1/2 top-1/2 z-10 m-auto h-5/6 w-5/6 -translate-y-1/2 -translate-x-1/2 rounded-md border-2 border-accent bg-base-100 shadow-lg">
      <div className="flex h-full flex-col items-center justify-center">
        {(status === 'loading' || fetchStatus === 'fetching') && (
          <Spinner context="document" />
        )}
        {status === 'success' && fetchStatus === 'idle' && (
          <iframe
            className="w-full h-full mb-4"
            src={`${Object.values(documentUrl!)[0]}#page=${documentPage}`}
          ></iframe>
        )}
        <Link
          className="btn-primary btn-outline btn mx-auto mb-4 mt-auto"
          to="./"
          relative="path"
        >
          Close
        </Link>
      </div>
    </div>
  )
}

export default DocumentModal

import { useDocumentModal } from './hooks'
import { Link } from 'react-router-dom'
import Loader from '../loader'

function DocumentModal() {
  const { documentPage, documentUrl, status, fetchStatus } = useDocumentModal()

  if (!documentUrl || !documentPage) return <></>

  return (
    <div className="fixed left-1/2 top-1/2 z-10 m-auto h-5/6 w-5/6 -translate-y-1/2 -translate-x-1/2 rounded-md border-2 border-accent bg-base-100 shadow-lg">
      <div className="flex h-full flex-col items-center justify-center">
        {(status === 'loading' || fetchStatus === 'fetching') && <Loader />}
        {status === 'success' && fetchStatus === 'idle' && (
          <object
            className="mb-4"
            data={`${Object.values(documentUrl)[0]}#page=${documentPage}`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Link{' '}
              <a href={`${Object.values(documentUrl)[0]}#page=${documentPage}`}>
                to the PDF!
              </a>
            </p>
          </object>
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

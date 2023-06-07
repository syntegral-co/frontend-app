import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { useDocumentModal } from './hooks'
import { documentState } from './atoms'
import { getDocument } from '../../utils/api'
import Loader from '../loader'

function DocumentModal() {
  const { isDocumentModalOpen, toggleDocumentModal } = useDocumentModal()
  const document = useRecoilValue(documentState)

  const { status, data, refetch, fetchStatus } = useQuery({
    queryKey: ['document'],
    queryFn: () => getDocument(document!.id, 5),
    enabled: document !== null,
    staleTime: 300000,
  })

  useEffect(() => {
    if (!document) return

    refetch()
  }, [document])

  if (!document || !isDocumentModalOpen) return <></>

  return (
    <div className="fixed left-1/2 top-1/2 z-10 m-auto h-5/6 w-5/6 -translate-y-1/2 -translate-x-1/2 rounded-md border-2 border-accent bg-base-100 shadow-lg">
      <div className="flex h-full flex-col items-center justify-center">
        {(status === 'loading' || fetchStatus === 'fetching') && <Loader />}
        {status === 'success' && fetchStatus === 'idle' && (
          <object
            className="mb-4"
            data={`${Object.values(data)[0]}#page=${document.page}`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Link{' '}
              <a href={`${Object.values(data)[0]}#page=${document.page}`}>
                to the PDF!
              </a>
            </p>
          </object>
        )}
        <button
          className="btn-outline btn-primary btn mx-auto mb-4 mt-auto"
          onClick={() => toggleDocumentModal()}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default DocumentModal

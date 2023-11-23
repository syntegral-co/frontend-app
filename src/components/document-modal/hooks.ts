import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getDocument, getDocumentByURI } from './api'
import { DocumentRequest } from './types'

export function useDocumentModal() {
  const [params] = useSearchParams()
  const documentId = params.get('document_id')
  const documentURI = params.get('document_uri')
  const documentPage = params.get('document_page')

  if (documentURI) {
    const { status, data, fetchStatus }: DocumentRequest = useQuery({
      queryKey: ['document', documentURI],
      queryFn: () => getDocumentByURI(documentURI),
      enabled: documentURI !== null,
      staleTime: 300000,
    })

    return {
      documentId: documentURI,
      documentPage,
      documentUrl: [data],
      status,
      fetchStatus,
    }
  }

  const { status, data, fetchStatus }: DocumentRequest = useQuery({
    queryKey: ['document', documentId],
    queryFn: () => getDocument(documentId!, 5),
    enabled: documentId !== null,
    staleTime: 300000,
  })

  return {
    documentId,
    documentPage,
    documentUrl: data,
    status,
    fetchStatus,
  }
}

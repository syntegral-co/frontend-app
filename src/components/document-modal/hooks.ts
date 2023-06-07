import { useRecoilState } from 'recoil'
import { documentState, drawerState } from './atoms'
import { DocumentLink } from './types'

export function useDocumentModal() {
  const [isOpen, setIsOpen] = useRecoilState(drawerState)
  const [document, setDocument] = useRecoilState(documentState)

  function documentLinkHandler(link: DocumentLink) {
    if (!document || document.id !== link.id) {
      setDocument(link)
    }

    if (!isOpen) {
      setIsOpen((isOpen) => !isOpen)
    }
  }

  function toggleDocumentModal() {
    setIsOpen((isOpen) => !isOpen)
  }

  return {
    isDocumentModalOpen: isOpen,
    toggleDocumentModal,
    onClickDocument: documentLinkHandler,
  }
}

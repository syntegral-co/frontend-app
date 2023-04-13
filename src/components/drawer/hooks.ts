import { useRecoilState } from 'recoil'
import { documentState, drawerState } from './atoms'
import { IDocumentLink } from './types'

export function useDrawer() {
  const [isOpen, setIsOpen] = useRecoilState(drawerState)
  const [document, setDocument] = useRecoilState(documentState)

  function documentLinkHandler(link: IDocumentLink) {
    if (!document || document.id !== link.id) {
      setDocument(link)
    }

    if (!isOpen) {
      setIsOpen((isOpen) => !isOpen)
    }
  }

  function toggleDrawer() {
    setIsOpen((isOpen) => !isOpen)
  }

  return {
    isDrawerOpen: isOpen,
    toggleDrawer,
    onClickDocument: documentLinkHandler,
  }
}

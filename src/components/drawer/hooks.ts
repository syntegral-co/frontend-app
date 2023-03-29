import { useRecoilState } from 'recoil'
import { drawerState } from '../../state/atom'

export function useDrawer() {
  const [isOpen, setIsOpen] = useRecoilState(drawerState)

  function toggleDrawer() {
    setIsOpen(!isOpen)
  }

  return { isDrawerOpen: isOpen, toggleDrawer }
}

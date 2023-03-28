import { useRecoilState } from 'recoil'
import { drawerState } from '../../state/atom'

export function useDrawer() {
  const [stateObject, setStateObject] = useRecoilState(drawerState)

  function toggleDrawer() {
    setStateObject({ isOpen: !stateObject.isOpen })
  }

  return { isDrawerOpen: stateObject.isOpen, toggleDrawer }
}

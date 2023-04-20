import { useRecoilState } from 'recoil'
import { themesState } from './atoms'

export function useThemes() {
  const [themes, setThemes] = useRecoilState(themesState)

  function toggleTheme(id: number) {
    let updatedThemes = [...themes].map((theme) => {
      if (theme.id !== id) return theme
      return { ...theme, checked: !theme.checked }
    })

    setThemes(updatedThemes)
  }

  return { themes, toggleImpactArea: toggleTheme }
}

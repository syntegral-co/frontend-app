import { useRecoilState } from 'recoil'
import { impactAreasState } from '../../state/atom'

export function useImpactAreas() {
  const [impactAreas, setImpactAreas] = useRecoilState(impactAreasState)

  function toggleImpactArea(id: string) {
    let updatedAreas = [...impactAreas].map((area) => {
      if (area.id !== id) return area
      return { ...area, checked: !area.checked }
    })

    setImpactAreas(updatedAreas)
  }

  return { impactAreas, toggleImpactArea }
}

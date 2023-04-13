import { useRecoilState } from 'recoil'
import { impactAreasState } from './atoms'

export function useImpactAreas() {
  const [impactAreas, setImpactAreas] = useRecoilState(impactAreasState)

  function toggleImpactArea(id: number) {
    let updatedAreas = [...impactAreas].map((area) => {
      if (area.id !== id) return area
      return { ...area, checked: !area.checked }
    })

    setImpactAreas(updatedAreas)
  }

  return { impactAreas, toggleImpactArea }
}

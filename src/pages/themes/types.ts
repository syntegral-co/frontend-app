type ThemeName = 'Purpose' | 'People' | 'Profit' | 'Planet'

interface Theme {
  id: string
  name: ThemeName
}

export const Themes: Record<ThemeName, Theme> = {
  Purpose: { id: 'purpose', name: 'Purpose' },
  People: { id: 'people', name: 'People' },
  Profit: { id: 'profit', name: 'Profit' },
  Planet: { id: 'planet', name: 'Planet' },
}

export function getThemesArray(): Theme[] {
  const themes = Object.values(Themes).map((theme) => theme)
  return themes
}

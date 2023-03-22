type ThemeName = 'Purpose' | 'People' | 'Profit' | 'Planet'

export interface ITheme {
  id: string
  name: ThemeName
}

export const Themes: Record<ThemeName, ITheme> = {
  Purpose: { id: 'purpose', name: 'Purpose' },
  People: { id: 'people', name: 'People' },
  Profit: { id: 'profit', name: 'Profit' },
  Planet: { id: 'planet', name: 'Planet' },
}

export function getThemesArray(): ITheme[] {
  const themes = Object.values(Themes).map((theme) => theme)
  return themes
}

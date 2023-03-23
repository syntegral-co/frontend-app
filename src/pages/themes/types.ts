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

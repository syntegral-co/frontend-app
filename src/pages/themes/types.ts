type ThemeName = 'Purpose' | 'People'| 'Profit' | 'Planet'

interface Theme {
    id: string,
    name: ThemeName,
    color: string
}

export const Themes: Record<ThemeName, Theme> = {
    Purpose: { id: 'purpose', name: 'Purpose', color: 'primary' },
    People: { id: 'people', name: 'People', color: 'secondary' },
    Profit: { id: 'profit', name: 'Profit', color: 'accent' },
    Planet: { id: 'planet', name: 'Planet', color: 'error' }
}

export function getThemesArray() : Theme[] {
    const themes = Object.values(Themes).map((theme) => theme)
    return themes
}
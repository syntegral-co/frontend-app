export interface Company {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
}

export interface Theme {
  id: number
  categoryId: number
  name: string
  definition: string
}

export interface Recipes {
  id: string
  title: string
}

export interface Recipe {
  id: string
  title: string
  image: string
  ingredients: string
  instruction: string
}

export interface AddRecipe {
  id: string
  title: string
  image: string
  ingredients: string
  instruction: string
}

export interface Message{
  message: string
}

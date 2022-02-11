import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { lastValueFrom } from "rxjs"
import { Recipes, Recipe, Message } from "./models"

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes(): Promise<Recipes[]> {
    return lastValueFrom(
      //this.http.get<Recipes[]>(`http://localhost:8080/api/recipes`)
      this.http.get<Recipes[]>(`/api/recipes`)
    ).then (r =>
      r.map(r2 => ({id: r2.id, title: r2.title} as Recipes)))
  }

  getRecipe(recepiId: string): Promise<Recipe> {
    return lastValueFrom(
      //this.http.get<Recipe>(`http://localhost:8080/api/recipe/`+recepiId)
      this.http.get<Recipe>(`/api/recipe/`+recepiId)
    ).then (r2 => ({id: r2.id, title: r2.title, image:r2.image, ingredients: r2.ingredients, instruction: r2.instruction } as Recipe))
  }

  saveRecipe(recipe:Recipe): Promise<Message>{
    return lastValueFrom(this.http.post<Message>('http://localhost:8080/api/recipe', recipe))
  }
}

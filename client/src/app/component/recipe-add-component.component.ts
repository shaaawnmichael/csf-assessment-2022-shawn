import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddRecipe, Message, Recipe } from '../models';
import { RecipeService } from '../RecipeService';

@Component({
  selector: 'app-recipe-add-component',
  templateUrl: './recipe-add-component.component.html',
  styleUrls: ['./recipe-add-component.component.css']
})
export class RecipeAddComponentComponent implements OnInit {

  form!: FormGroup
  recipe!: Recipe
  message!: Message

  constructor(private fb: FormBuilder, private recipeSvc : RecipeService, private route: Router) { }

  ngOnInit(): void {
    this.form=this.createForm()
  }

  processForm() {
    const add: AddRecipe = this.form.value as AddRecipe
    console.info('>>>> reg: ', add)
    this.recipeSvc.saveRecipe(this.recipe)
      .then(result=>
      {this.message = result as Message
      console.log(this.message.message)})
    this.form.reset()
    this.route.navigate(['/'])
  }

  private createForm(): FormGroup {
    return this.fb.group({
      Title: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      Ingredients: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      Instructions: this.fb.control('', [ Validators.required, Validators.minLength(3) ]),
      Image: this.fb.control('', [ Validators.required]),
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipes } from '../models';
import { RecipeService } from '../RecipeService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {

  recipes : Recipes[] = []

  constructor(private recipeSvc : RecipeService, private router: Router) { }

  ngOnInit() {
    console.info ('retrieving recipes')
    this.recipeSvc.getAllRecipes()
      .then (r => this.recipes = r)
      .catch(error => {
        alert('An error has ocurred')
        console.error('>>> error:', error)
      })
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../RecipeService';


@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {

  recipe!: Recipe
  id: any;

  constructor(private recipeSvc : RecipeService, private router: Router, private ActivatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params['id']
    console.info ('retrieving recipe')
    this.recipeSvc.getRecipe(this.id)
      .then (r => this.recipe = r)
      .catch(error => {
        alert('No recipe found with ID')
        this.back()
        console.error('>>> error:', error)
      })
  }

  back(): void {
    this.router.navigate(['/'])
  }

}

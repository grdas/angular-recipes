import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/Share/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe: Recipe;
  id : number;

  constructor(private shoppingListService : ShoppingListService,
              private route : ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {

    // var id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );    
  }

  addToShoppingList(ingredients: Ingredient[])
  {
    ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
    
  }

}

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Share/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Chole',
        'Chole is made up of chikpeas, it tases good with hot boiled rice',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg',
        [
            new Ingredient('ChickPeas',1),
            new Ingredient('Masala powder',2)
    ]),
        new Recipe('Delicious Paneer Butter Masala',
        'Paneer butter masala is an all time favourite north-indian recipe. It goes well with Naan and Roti',
        'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg',
        [
            new Ingredient('Paneer',1),
            new Ingredient('Cashew',2),
            new Ingredient('Butter',2)
        ] )
      ];

    getRecipes()
    {
        return this.recipes.slice();
    }

    getRecipe(index: number)
    {
        return this.recipes[index];
    }
}
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Share/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] =
    [
      new Ingredient('Paneer', 2),
      new Ingredient('Tomato', 5),
    ];
    
    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(item: Ingredient)
    {
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
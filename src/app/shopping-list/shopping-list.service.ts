import { Subject } from "rxjs";
import { Ingredient } from "../Share/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Share/ingredient.model';
//import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =
  [
    new Ingredient('Paneer', 2),
    new Ingredient('Tomato', 5),
  ];
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe',
  //   'This is simply a test',
  //   'https://thebrilliantkitchen.com/puerto-rican-carne-guisada-recipe/' )
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Share/ingredient.model';

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

  constructor() { }

  ngOnInit(): void { }

  onItemAdded(item: Ingredient) {
    this.ingredients.push(item);
  }
}

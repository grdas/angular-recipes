import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() RecipeItemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tasty Chole',
    'Chole is made up of chikpeas, it tases good with hot boiled rice',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg' ),
    new Recipe('Delicious Paneer Butter Masala',
    'Paneer butter masala is an all time favourite north-indian recipe. It goes well with Naan and Roti',
    'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg' )
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onNavigateRecipe(recipe: Recipe) {
    this.RecipeItemSelected.emit(recipe);    
  }

}

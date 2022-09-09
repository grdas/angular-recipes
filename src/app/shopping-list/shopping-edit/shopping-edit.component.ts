import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Share/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  @ViewChild('itemName', { static: true }) itemName: ElementRef;
  @ViewChild('itemAmount', { static: true }) itemAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    var ingredient = new Ingredient(
        this.itemName.nativeElement.value,
        this.itemAmount.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
    //this.ItemAdded.emit(ingredient);
  }
}

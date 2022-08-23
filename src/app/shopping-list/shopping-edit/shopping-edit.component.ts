import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Share/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ItemAdded = new EventEmitter<Ingredient>();
  @ViewChild('itemName', { static: true }) itemName: ElementRef;
  @ViewChild('itemAmount', { static: true }) itemAmount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    var ingredient = new Ingredient(this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value);

    this.ItemAdded.emit(ingredient);
  }
}

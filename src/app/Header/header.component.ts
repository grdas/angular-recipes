import { Component, EventEmitter, Output } from "@angular/core";

@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html',
        styles:['']
    }
)
export class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelectionChange(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

}
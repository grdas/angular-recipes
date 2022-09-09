// This is not being used now since we are using latest bootstrap.
import { Directive, HostListener } from "@angular/core";

@Directive(
    {
        selector: 'appDropdown'
    }
)

export class DropDownDirective{
    isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  constructor(private element: ElementRef, private renderer: Renderer2){

  }

  @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
  }
}

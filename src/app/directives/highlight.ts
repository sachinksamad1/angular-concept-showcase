import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
    // HostBinding binds a host element property to a directive property.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
    this.backgroundColor = 'transparent';
  }

  // HostListener listens for events on the host element.
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}

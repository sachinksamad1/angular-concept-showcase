import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  imports: [],
  templateUrl: './dom-manipulation.html',
  styleUrl: './dom-manipulation.scss'
})
export class DomManipulation implements AfterViewInit{
    // ElementRef is a wrapper around a native element.
  @ViewChild('myParagraph') myParagraph!: ElementRef;

  // Renderer2 is a service for safely manipulating elements.
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // DON'T do this: this.myParagraph.nativeElement.style.color = 'blue';
    // This is direct DOM access and is discouraged.

    // DO this: Use Renderer2 for safe DOM manipulation.
    this.renderer.setStyle(this.myParagraph.nativeElement, 'color', 'blue');
    this.renderer.addClass(this.myParagraph.nativeElement, 'stylish-text');
  }
}

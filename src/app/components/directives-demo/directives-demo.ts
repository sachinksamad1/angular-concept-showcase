import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-directives-demo',
  imports: [CommonModule, Highlight],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.scss'
})
export class DirectivesDemo {
  isVisible = true;
  items = ['Apple', 'Banana', 'Orange'];
}

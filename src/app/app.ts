import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateProjection } from './components/template-projection/template-projection';
import { DirectivesDemo } from './components/directives-demo/directives-demo';
import { QueriesDemo } from './components/queries-demo/queries-demo';
import { DomManipulation } from './components/dom-manipulation/dom-manipulation';
import { DynamicLoader } from './components/dynamic-loader/dynamic-loader';
import { ChangeDetection } from './components/change-detection/change-detection';

@Component({
  selector: 'app-root',
  imports: [
    TemplateProjection, 
    DirectivesDemo,
    QueriesDemo,
    DomManipulation,
    DynamicLoader,
    ChangeDetection  
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-concept-showcase');
}

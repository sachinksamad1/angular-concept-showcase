import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-queries-demo',
  imports: [Child],
  templateUrl: './queries-demo.html',
  styleUrl: './queries-demo.scss'
})
export class QueriesDemo implements AfterViewInit {
   // @ViewChild: Gets the first element or directive matching the selector from the view DOM.
  @ViewChild('first') firstChild!: Child;

  // @ViewChildren: Gets a QueryList of all elements or directives matching the selector.
  @ViewChildren(Child) allChildren!: QueryList<Child>;

  ngAfterViewInit() {
    console.log('ViewChild:', this.firstChild);
    console.log('ViewChildren Count:', this.allChildren.length);
  }

  callFirstChildMethod() {
    this.firstChild.showMessage();
  }

  callAllChildrenMethods() {
    this.allChildren.forEach(child => child.showMessage());
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child {
  message = "Hello! This is a child component";
  
  showMessage() {
    alert(this.message);
  }
}

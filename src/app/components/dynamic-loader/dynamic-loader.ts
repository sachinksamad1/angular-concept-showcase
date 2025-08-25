import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Alert } from './alert/alert';

@Component({
  selector: 'app-dynamic-loader',
  imports: [Alert],
  templateUrl: './dynamic-loader.html',
  styleUrl: './dynamic-loader.scss'
})
export class DynamicLoader {
    // ViewContainerRef represents a container where one or more views can be attached.
  @ViewChild('dynamicHost', { read: ViewContainerRef, static: true })
  dynamicHost!: ViewContainerRef;

  loadDynamicComponent() {
    // Clear any existing components in the container
    this.dynamicHost.clear();

    // Create and attach the AlertComponent to the host container
    const componentRef = this.dynamicHost.createComponent(Alert);
  }
}

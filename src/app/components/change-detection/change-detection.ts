import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.scss'
})
export class ChangeDetection {
 counter = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  updateCounterWithoutDetection() {
    setTimeout(() => {
      this.counter = 5;
      console.log('Counter updated, but view is not checked yet.');
    }, 1000);
  }

  updateCounterWithDetection() {
    setTimeout(() => {
      this.counter = 10;
      console.log('Counter updated, and now we manually trigger change detection.');
      // Manually tells Angular to run change detection for this component.
      this.cdr.detectChanges();
    }, 1000);
  }
}

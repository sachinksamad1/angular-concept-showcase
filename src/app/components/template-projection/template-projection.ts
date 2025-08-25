import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-projection',
  imports: [CommonModule],
  templateUrl: './template-projection.html',
  styleUrl: './template-projection.scss'
})
export class TemplateProjection {
  showContent = true;
}

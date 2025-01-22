import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-element',
  imports: [],
  templateUrl: './feature-element.component.html',
  styleUrl: './feature-element.component.scss'
})
export class FeatureElementComponent {
  @Input() primaryText: string = ''; // Texto principal
  @Input() secondaryText: string = ''; // Texto secundario
}

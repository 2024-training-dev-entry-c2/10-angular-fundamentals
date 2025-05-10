import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-header',
  imports: [],
  templateUrl: './feature-header.component.html',
  styleUrl: './feature-header.component.scss'
})
export class FeatureHeaderComponent {
  public tagline = input<string>();
  public title = input<string>();
}

import { Component, input, InputSignal } from '@angular/core';
import { FeatureHeader } from '@interfaces/features.header.interface';

@Component({
  selector: 'app-features-header',
  standalone: true,
  imports: [],
  templateUrl: './features-header.component.html',
  styleUrl: './features-header.component.scss'
})
export class FeaturesHeaderComponent {
  public header: InputSignal<FeatureHeader> = input<FeatureHeader> ({} as FeatureHeader);

}

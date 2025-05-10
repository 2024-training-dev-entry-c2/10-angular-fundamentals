import { Component, input } from '@angular/core';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { FeatureContentComponent } from "./feature-content/feature-content.component";
import { FeatureVideoComponent } from "./feature-video/feature-video.component";

@Component({
  selector: 'app-feature',
  imports: [FeatureHeaderComponent, FeatureContentComponent, FeatureVideoComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  public tagline = input<string>();
  public title = input<string>();
  public content = input<string>();
  public points = input<{icon: string; text: string}[]>();
  public testimonial = input<{text: string; author: string; place: string, image: string}>();
  public videos = input<{src: string; type: string}[]>();  
}

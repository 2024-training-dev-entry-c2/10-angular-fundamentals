import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-video',
  imports: [],
  templateUrl: './feature-video.component.html',
  styleUrl: './feature-video.component.scss'
})
export class FeatureVideoComponent {
  public videos = input<{src: string; type: string}[]>();  
}

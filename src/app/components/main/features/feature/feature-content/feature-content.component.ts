import { Component, input } from '@angular/core';
import { TestimonialComponent } from "../testimonial/testimonial.component";

@Component({
  selector: 'app-feature-content',
  imports: [TestimonialComponent],
  templateUrl: './feature-content.component.html',
  styleUrl: './feature-content.component.scss'
})
export class FeatureContentComponent {
  public content = input<string>();
  public points = input<{icon: string; text: string}[]>();
  public testimonial = input<{text: string; author: string; place: string, image: string}>();
}

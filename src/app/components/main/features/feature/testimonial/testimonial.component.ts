import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  public text = input<string>();
  public author = input<string>();
  public authorImage = input<string>();
  public place = input<string>();
  public url = input<{text: string, src: string}>();
}

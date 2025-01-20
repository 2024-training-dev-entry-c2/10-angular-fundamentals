import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  testimonials = [
    { title: 'Wallpaper*', quote: 'A radical reinterpretation of mobile tech' },
    { title: 'Highsnobiety', quote: 'Boundary-pushing aesthetics' },
    { title: 'GQ', quote: 'The most hyped tech company in years' },
  ];
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Output() testimonialSelected = new EventEmitter<{
    title: string;
    quote: string;
  }>();

  testimonials = [
    { title: 'Wallpaper*', quote: 'A radical reinterpretation of mobile tech' },
    { title: 'Highsnobiety', quote: 'Boundary-pushing aesthetics' },
    { title: 'GQ', quote: 'The most hyped tech company in years' },
  ];

  selectTestimonial(testimonial: { title: string; quote: string }) {
    this.testimonialSelected.emit(testimonial);
  }
}

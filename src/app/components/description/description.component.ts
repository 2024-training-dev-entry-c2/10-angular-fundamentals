import { Component, OnInit } from '@angular/core';
import { ISlide } from '../../models/slide.model';
@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent implements OnInit {
  slides: ISlide[] = [
    { id: 1, text: 'To make technology easier.' },
    { id: 2, text: 'To improve everyday life.' },
    { id: 3, text: "To improve people's lives." },
  ];
  currentIndex = 0;
  ngOnInit(): void {
    setInterval(() => this.nextText(), 3000);
  }
  nextText(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  getClass(index: number): string {
    return this.currentIndex === index ? 'show' : 'hide';
  }
}

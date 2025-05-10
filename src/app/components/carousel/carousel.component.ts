import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
@Input() public images:  { src: string; alt: string;}[] =[];
@Input() public classContainer: string= 'hero__list';
@Input() public classList: string= 'hero__carousel-item';
@Input() public classItem: string= 'hero__card';
}

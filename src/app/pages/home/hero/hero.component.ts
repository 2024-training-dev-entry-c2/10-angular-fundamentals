import { Component } from '@angular/core';
import { CarouselComponent } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-hero',
  imports: [CarouselComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  images = [
    { src: "./images/bento-home-1.webp", alt: "Busines Owner Carousel Image" },
    { src: "./images/bento-home-2.webp", alt: "Abstract Blue Colored Gradient" },
    { src: "./images/bento-home-3.webp", alt: "Cards Bento Image" },
    { src: "./images/bento-home-4.webp", alt: "Girl in the office Image" },
    { src: "./images/bento-home-5.webp", alt: "Two Cards with plants and Icon Payment" },
    { src: "./images/bento-home-6.webp", alt: "Girl in the Office with cellphone in her Hand" },
    { src: "./images/bento-home-7.webp", alt: "Pipe Business Carousel Image" },
    { src: "./images/bento-home-1.webp", alt: "Busines Owner Carousel Image" },
    { src: "./images/bento-home-2.webp", alt: "Abstract Blue Colored Gradient" },
    { src: "./images/bento-home-3.webp", alt: "Cards Bento Image" },
    { src: "./images/bento-home-4.webp", alt: "Girl in the office Image" },
    { src: "./images/bento-home-5.webp", alt: "Two Cards with plants and Icon Payment" },
    { src: "./images/bento-home-6.webp", alt: "Girl in the Office with cellphone in her Hand" },
    { src: "./images/bento-home-7.webp", alt: "Pipe Business Carousel Image" },
  ];
}

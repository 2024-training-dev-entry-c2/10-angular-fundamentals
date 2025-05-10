import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductVideoComponent } from '../product-video/product-video.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductImageComponent, ProductVideoComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const videoElements = this.el.nativeElement.querySelectorAll(
      '.product__image-video'
    ) as NodeListOf<HTMLVideoElement>;

    videoElements.forEach((video: HTMLVideoElement) => {
      video.autoplay = true;
      video.muted = true;
      video.load();
    });
  }

  products = [
    {
      name: 'Phone (2a) Plus',
      description: 'Extra power, extra pixels, extra unique. Extraordinary.',
      link: 'https://intl.nothing.tech/pages/phone-2a-plus',
      mediaType: 'image',
      mediaUrl: '/images/primera.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Phone (2a)',
      description: 'A new icon is born. Powerfully unique from the inside out.',
      link: 'https://intl.nothing.tech/pages/phone-2a',
      mediaType: 'image',
      mediaUrl: '/images/segundo.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Ear (open)',
      description: '(open) your world. Discover a more present way to listen.',
      link: 'https://intl.nothing.tech/pages/ear-open',
      mediaType: 'image',
      mediaUrl: '/images/tercera.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Ear (stick)',
      description:
        'Half in-ear design with powerful audio. Pure Sound. Pure Comfort.',
      link: 'https://intl.nothing.tech/pages/stick',
      mediaType: 'image',
      mediaUrl: '/images/cuarta.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Ear (2)',
      description:
        'Meet Ear (2). Nothing’s first ever personalised Active Noise Cancellation.',
      link: 'https://intl.nothing.tech/pages/ear-2',
      mediaType: 'image',
      mediaUrl: '/images/quinta.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Power (2)',
      description:
        'A faster way to power up. Super powerful 45W charging. Versatile USB-C. MagSafe compatible.',
      link: 'https://intl.nothing.tech/pages/power-2',
      mediaType: 'video',
      mediaUrl: '/videos/sexto.mp4',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Phone Case (2)',
      description: 'A case in point. Designed to protect. Built to last.',
      link: 'https://intl.nothing.tech/pages/phone-case-2',
      mediaType: 'image',
      mediaUrl: '/images/septima.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Nothing Apparel',
      description:
        'Drop 2 is here. The Ripstop Tracksuit, Ripstop Overall and Heavy Hoodie are available now. Find your fit.',
      link: 'https://intl.nothing.tech/pages/nothing-apparel',
      mediaType: 'image',
      mediaUrl: '/images/octavo.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Community Edition Project',
      description:
        'There it glows. Phone (2a) Plus Community Edition is here. A first-of-its-kind co-creation project. Learn all about the journey below.',
      link: 'https://intl.nothing.tech/pages/community-edition-project',
      mediaType: 'image',
      mediaUrl: '/images/noveno.webp',
      buttonText: 'LEARN MORE',
    },
    {
      name: 'Glyph Developer Kit',
      description:
        'Introducing the Glyph Developer Kit. Your opportunity to integrate apps with the iconic Glyph Interface. API key registration is now open.',
      link: 'https://intl.nothing.tech/pages/glyph-developer-kit',
      mediaType: 'image',
      mediaUrl: '/images/decimo.webp',
      buttonText: 'LEARN MORE',
    },
  ];
}

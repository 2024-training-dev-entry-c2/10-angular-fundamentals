import { Component } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-mosaic',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-mosaic.component.html',
  styleUrl: './hero-mosaic.component.scss',
})
export class HeroMosaicComponent {
  heroItems = [
    {
      imageSrc: 'group_of_models_harry_otter_collab.webp',
      altText: 'group of models showcasing the harry potter collab',
      text: 'HARRY POTTER｜VISIONNAIRE Lookbook Nouvelle collection.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: '',
      altText: '',
      text: 'Découvres toutes les nouveautés.',
      videoSrc:
        '//vision-naire.com/cdn/shop/videos/c/vp/5875dc6451024b02a591f595d48eeb2b/5875dc6451024b02a591f595d48eeb2b.HD-1080p-7.2Mbps-37806841.mp4?v=0',
      link: '#',
    },
    {
      imageSrc: 'group_of_models_zipper_hoodies.webp',
      altText:
        "group of four models showcasing the zipper hoodies collection themed in each harry's potter house",
      text: 'Découvres tous les nouveaux hoodie et zipper.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'model_collab.webp',
      altText:
        "model showcasing the harry potter cap collab",
      text: 'Découvres tous les accessoire de la collab.',
      videoSrc: '',
      link: '#',
    },
  ];
}

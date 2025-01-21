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
      altText: 'model showcasing the harry potter cap collab',
      text: 'Découvres tous les accessoire de la collab.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'model_brown_dobby_pull.webp',
      altText: 'model showcasing the brown dobby pull',
      text: 'Nouveau pull Dobby Marron.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'model_full_of_suitcases.webp',
      altText: 'femenine model showcasing the harry potter t-shirt collection',
      text: 'Nouveaux BABY TEE.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'model_back_hagrid_hoodie.webp',
      altText: "femenine model showcasing the hagrid's themed black hoodie",
      text: 'Ensemble Hagrid dispo en gris et noir.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'lookbook_dobby_brown_sock.webp',
      altText: 'brown dobby sock of free dobby from harry potter',
      text: 'Libérez Dobby! Voir tous les accessoires.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: 'model_vissionaire_harry_potter_t-shirt.webp',
      altText: 'brown dobby sock of free dobby from harry potter',
      text: 'Tous les t-shirt de la collab.',
      videoSrc: '',
      link: '#',
    },
    {
      imageSrc: '',
      altText: '',
      text: '',
      videoSrc:
      '//vision-naire.com/cdn/shop/videos/c/vp/c59cfcd5a43c43b6a78721703934eaf2/c59cfcd5a43c43b6a78721703934eaf2.HD-1080p-3.3Mbps-30442736.mp4?v=0',
      link: '#',
    },
    // {
    //   imageSrc: 'model_vissionaire_harry_potter_t-shirt.webp',
    //   altText: 'brown dobby sock of free dobby from harry potter',
    //   text: `<h3>Tous les t-shirt de la collab.</h3>`,
    //   videoSrc: '',
    //   link: '#',
    // },TODO: add support for html in text or highlighted textfield
  ];
}

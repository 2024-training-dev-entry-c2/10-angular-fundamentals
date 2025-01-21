import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHeader } from '../interfaces/headersIcons';



@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  iconsHeader: IconHeader[] = [
    {
      src: '../../../public/svg/headSpace.svg',
      alt: 'logo de headSpace',
      class: 'banner__logo',
    },
    {
      src: '../../../public/svg/remote.svg',
      alt: 'logo de remote',
      class: 'banner__logo',
    },
    {
      src: '../../../public/svg/password.svg',
      alt: 'logo de password',
      class: 'banner__logo',
    },
    {
      src: '../../../public/svg/figma.svg',
      alt: 'logo de figma',
      class: 'banner__logo banner__logo--figma',
    },
  ];
}

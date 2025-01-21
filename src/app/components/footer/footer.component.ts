import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialLinks = [
    {
      url: '#',
      image: '../../../public/images/redes-socials/Captura.PNG',
      alt: 'Instagram',
    },
    { url: '#', image: '../../../public/images/redes-socials/x.PNG', alt: 'X' },
    {
      url: '#',
      image: '../../../public/images/redes-socials/linkedl.PNG',
      alt: 'LinkedIn',
    },
    {
      url: '#',
      image: '../../../public/images/redes-socials/yt.PNG',
      alt: 'Facebook',
    },
    {
      url: '#',
      image: '../../../public/images/redes-socials/face.PNG',
      alt: 'YouTube',
    },
  ];

  companyLinks = [
    { url: '#', text: 'About us' },
    { url: '#', text: 'Careers' },
    { url: '#', text: 'Security' },
    { url: '#', text: 'Status' },
    { url: '#', text: 'Terms & privacy' },
  ];

  downloadLinks = [
    { url: '#', text: 'iOS & Android' },
    { url: '#', text: 'Mac & Windows' },
    { url: '#', text: 'Calendar' },
    { url: '#', text: 'Web Clipper' },
  ];

  resourceLinks = [
    { url: '#', text: 'Help center' },
    { url: '#', text: 'Pricing' },
    { url: '#', text: 'Blog' },
    { url: '#', text: 'Community' },
    { url: '#', text: 'Integrations' },
    { url: '#', text: 'Templates' },
    { url: '#', text: 'Affiliates' },
  ];

  notionForLinks = [
    { url: '#', text: 'Enterprise' },
    { url: '#', text: 'Small business' },
    { url: '#', text: 'Personal' },
  ];
}

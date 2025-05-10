import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-privacy',
  imports: [],
  templateUrl: './footer-privacy.component.html',
  styleUrl: './footer-privacy.component.scss'
})
export class FooterPrivacyComponent {
  menuItemsLink = [
    { name: 'Privacy Policy', link: '#' },
    { name: 'Responsible Disclosure', link: '#' },
    { name: 'Terms of Service', link: '#' },
    { name: 'Trust Center', link: '#' },
  ];

  socialLinks = [
    { url: '/assets/icons/icons.svg#icon-linkedin' },
    { url: '/assets/icons/icons.svg#icon-twitter' },  // Agregar el path SVG adecuado
  
  ];
}

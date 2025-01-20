import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  productLinks = [
    { name: 'Phone (2a) Plus', link: '#' },
    { name: 'Phone (2a)', link: '#' },
    { name: 'Phone (2)', link: '#' },
    { name: 'Ear (open)', link: '#' },
    { name: 'Ear (a)', link: '#' },
    { name: 'Ear', link: '#' },
    { name: 'Accessories', link: '#' },
    { name: 'Apparel', link: '#' },
  ];

  companyLinks = [
    { name: 'About us', link: '#' },
    { name: 'Careers', link: '#' },
    { name: 'Community', link: '#' },
    { name: 'Sustainability', link: '#' },
    { name: 'Business enquiry', link: '#' },
    { name: 'Press contact', link: '#' },
  ];

  supportLinks = [
    { name: 'Support centre', link: '#' },
    { name: 'Contact us', link: '#' },
    { name: 'Find a store', link: '#' },
    { name: 'Security Vulnerability Report', link: '#' },
  ];

  legalLinks = [
    { name: 'Privacy policy', link: '#' },
    { name: 'Terms of sale', link: '#' },
    { name: 'Acceptable use policy', link: '#' },
    { name: 'User agreement', link: '#' },
  ];
}

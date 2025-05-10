import { Component } from '@angular/core';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { FooterFormComponent } from '../footer-form/footer-form.component';
import { FooterPrivacyComponent } from '../footer-privacy/footer-privacy.component';


@Component({
  selector: 'app-footer',
  imports: [NavFooterComponent,FooterFormComponent,FooterPrivacyComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  menuItems = [
    {
      title: 'Products',
      links: [
        { text: 'Capital', ariaLabel: 'Learn more about the Capital product', href: '#' },
        { text: 'Business Card', ariaLabel: 'Learn more about our Business Card', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', ariaLabel: 'Learn more about us', href: '#' },
        { text: 'Careers', ariaLabel: 'View our Careers page', href: '#' },
        { text: 'Newsroom', ariaLabel: 'Read our latest news in the Newsroom', href: '#' },
        { text: 'Contact', ariaLabel: 'Contact us', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', ariaLabel: 'Visit our Blog', href: '#' },
        { text: 'FAQs', ariaLabel: 'Find answers in our FAQs', href: '#' },
        { text: 'API Docs', ariaLabel: 'View our API Documentation', href: '#' }
      ]
    },
    {
      title: 'PIPE APPS',
      links: [
        { text: 'For Businesses', ariaLabel: 'Explore apps for Businesses', href: '#' },
        { text: 'For Partners', ariaLabel: 'Explore apps for Partners', href: '#' }
      ]
    }
  ];

}

import { Component } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';

@Component({
  selector: 'app-menu-actions',
  imports: [SubMenuComponent],
  templateUrl: './menu-actions.component.html',
  styleUrl: './menu-actions.component.scss'
})
export class MenuActionsComponent {
  menuItems = [
    {
      id: 'company',
      label: 'Company',
      ariaLabel: 'Learn about our company',
      isVisible: false,
    },
    {
      id: 'signin',
      label: 'Sign in',
      ariaLabel: 'Sign in to your account',
      isVisible: false,
    },
    {
      id: 'demo',
      label: 'Book a demo',
      ariaLabel: 'Book a demo of our financial solutions',
      isButton: true,
    },
  ];

  
  submenus = [
    {
      title: 'Embedded Financial Services',
      classCard: 'card',
      cards: [
        { imgSrc: './images/advance-amount.webp', altText: 'Card 1 Image', label: 'For Businesses' },
        { imgSrc: './images/navtile-card.webp', altText: 'Card 2 Image', label: 'For Partners' }

      ],
      links: 
        { title: 'Learn More', ref: [{ href: '/link1', text: 'Sing in' },{ href: '/link1', text: 'Book a demo' }] },
      
    },
    {
      title: 'Embedded Financial Services',
      classCard: 'card__info',
      cards: [
        { imgSrc: './images/advance-amount.webp', altText: 'Card 1 Image', label: 'Capital' },
        { imgSrc: './images/navtile-card.webp', altText: 'Card 2 Image', label: 'amount' },
        { imgSrc: './images/navtile-card.webp', altText: 'Card 2 Image', label: 'amount' }

      ],
      links: 
        { title: 'Learn More', ref: [{ href: '/link1', text: 'Sing in' },{ href: '/link1', text: 'Book a demo' }] },
      
    },
  ]
  isSubMenuSinginVisible = false;
  isSubMenuCompanyVisible = false;
  toggleSubMenuSingin(visible: boolean) {
    this.isSubMenuSinginVisible = visible;
    
  }

  toggleSubMenuCompany(visible: boolean) {
    this.isSubMenuCompanyVisible = visible;
    
  }

}

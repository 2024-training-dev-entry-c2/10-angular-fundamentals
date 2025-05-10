import { Component } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';

@Component({
  selector: 'app-menu-section',
  imports: [SubMenuComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {

  menuItems = [
    { name: 'Products', link: '#', hasSubMenu: true, toggleMethod: 'toggleSubMenu' },
    { name: 'Solutions', link: '#', hasSubMenu: false },
    { name: 'Partners', link: '#', hasSubMenu: false },
    { name: 'Resources', link: '#', hasSubMenu: true, toggleMethod: 'toggleSubMenuResourcer' }
  ];

  isSubMenuProductsVisible = false;
  isSubMenuSinginVisible = false;
  isSubMenuResourcerVisible = false;
  isSubMenuCompanyVisible = false;

  submenus = [
    {
      title: 'Embedded Financial Services',
      classCard: 'card',
      cards: [
        { imgSrc: './images/advance-amount.webp', altText: 'Card 1 Image', label: 'Capital' },
        { imgSrc: './images/navtile-card.webp', altText: 'Card 2 Image', label: 'amount' }

      ],
      links: 
        { title: 'Learn More', ref: [{ href: '/link1', text: 'Learn More' }] },
      
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


  toggleSubMenu(visible: boolean) {
    this.isSubMenuProductsVisible = visible;
    
  }
  toggleSubMenuSingin(visible: boolean) {
    this.isSubMenuSinginVisible = visible;
    
  }
  toggleSubMenuResourcer(visible: boolean) {
    this.isSubMenuResourcerVisible = visible;
    
  }
  toggleSubMenuCompany(visible: boolean) {
    this.isSubMenuCompanyVisible = visible;
    
  }
}

import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../banner/banner.component';
import { SubMenuComponent } from '../../sub-menu/sub-menu.component';

interface MenuItem {
  label: string;
  href?: string;
  icon?: string;
  iconAlt?: string;
  hasDropdown?: boolean;
  className?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BannerComponent, SubMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Notion',
      href: '#',
      icon: '../../../public/svg/notion.svg',
      iconAlt: 'Notion logo',
      className: 'header__menu-item header__menu-item--logo',
    },
    {
      label: 'Product',
      hasDropdown: true,
      className: 'header__menu-item header__menu-item--has-dropdown',
    },
    {
      label: 'Download',
      className: 'header__menu-item',
    },
    {
      label: 'Solutions',
      hasDropdown: true,
      className: 'header__menu-item header__menu-item--has-dropdown',
    },
    {
      label: 'Resources',
      hasDropdown: true,
      className: 'header__menu-item header__menu-item--has-dropdown',
    },
    {
      label: 'Pricing',
      className: 'header__menu-item',
    },
  ];

  menuSeparator: MenuItem[] = [
    {
      label: 'Request a demo',
      className: 'header__submenu-item',
    },
    {
      label: 'Log in',
      className: 'header__submenu-item',
    },
    {
      label: 'Get Notion free',
      className: 'header__submenu-item header__submenu-item--cta',
    },
  ];

  dropdownItems: string[] = [
    'Product',
    'Engineering',
    'Design',
    'Marketing',
    'IT',
    'Startups',
    'Enterprise',
    'Customer stories',
  ];
}

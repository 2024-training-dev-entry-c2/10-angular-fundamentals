import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = [
    { name: 'Phone', link: null },
    { name: 'Audio', link: null },
    { name: 'CMF', link: '#' },
    { name: 'Store', link: '#' },
    { name: 'Community', link: '#' },
    { name: 'Support', link: '#' },
  ];
}

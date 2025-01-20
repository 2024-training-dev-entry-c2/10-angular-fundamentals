import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems = [
    { name: 'Phone', link: null },
    { name: 'Audio', link: null },
    { name: 'CMF', link: '#' },
    { name: 'Store', link: '#' },
    { name: 'Community', link: '#' },
    { name: 'Support', link: '#' },
    { name: 'Support', link: '#' },
  ];
}

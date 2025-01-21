import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems = signal([
    { name: 'Wearable', id: 1 },
    { name: 'Neural', id: 2 },
    { name: 'Programs', id: 3 },
    { name: 'Updates', id: 4 },
    { name: 'Search', id: 5 },
  ]);
  handleClick(item: { name: string; id: number }) {
    console.log('Clicked:', item.name);
  }
}

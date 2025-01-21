import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-dropdown',
  imports: [],
  templateUrl: './collections-dropdown.component.html',
  styleUrl: './collections-dropdown.component.scss',
})
export class CollectionsDropdownComponent {
  firstColumn = [
    'HARRY POTTER | VISIONNAIRE',
    'Lookbook N°3',
    'Lookbook N°4',
    'Lookbook N°5',
    'Les couleurs',
    'Collab Jordy VDN',
  ];
  secondColumn = [
    'COLLAB LE COQ SPORTIF',
    'Lookbook N°6',
    'Lookbook 6.1',
    'Lookbook N°7',
    'Lookbook N°7.1',
    'Lookbook N°7.2',
  ];
}

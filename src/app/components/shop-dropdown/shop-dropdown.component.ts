import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-dropdown',
  imports: [],
  templateUrl: './shop-dropdown.component.html',
  styleUrl: './shop-dropdown.component.scss'
})
export class ShopDropdownComponent {
  firstColumn = [
    'soldes',
    'tout voir',
    'Nouveautés',
    'HARRY POTTER | VISIONNAIRE',
    'VESTES',
    'SWEAT',
  ];
  secondColumn = [
    'T-shirt',
    'ACCESSOIRES',
    'Pantalons',
    'CHEMISES',
    'SHORT',
    'CASQUETTES & BOB',
  ];
}

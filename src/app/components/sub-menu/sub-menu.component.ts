import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  subMenu = input<any[]>();
}

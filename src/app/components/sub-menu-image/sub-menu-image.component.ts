import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenuItem';

@Component({
  selector: 'app-sub-menu-image',
  imports: [],
  templateUrl: './sub-menu-image.component.html',
  styleUrl: './sub-menu-image.component.scss'
})
export class SubMenuImageComponent {
  @Input() items!: IMenuItem[];
}

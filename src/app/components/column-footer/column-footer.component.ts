import { Component, input, Input } from '@angular/core';
import { SubMenuComponent } from "../sub-menu/sub-menu.component";
import { IMenuItem } from '../../interfaces/IMenuItem';
import { SubMenuImageComponent } from "../sub-menu-image/sub-menu-image.component";

@Component({
  selector: 'app-column-footer',
  imports: [SubMenuComponent, SubMenuImageComponent],
  templateUrl: './column-footer.component.html',
  styleUrl: './column-footer.component.scss'
})
export class ColumnFooterComponent {
  public title = input<string>();
  // @Input() items!: any[];
  public items = input<string[]>();
  public imageItems = input<IMenuItem[]>();
  public isMenuImage = input<boolean>();
  // @Input() isMenuImage!: boolean;
}

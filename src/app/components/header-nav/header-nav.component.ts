import { Component, ViewEncapsulation } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { HeaderActionsComponent } from "../header-actions/header-actions.component";

@Component({
  selector: 'app-header-nav',
  imports: [MenuComponent, HeaderActionsComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent {

}

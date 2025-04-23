import { Component, ViewEncapsulation } from '@angular/core';
import { WinampLogoComponent } from "../winamp-logo/winamp-logo.component";

@Component({
  selector: 'app-menu',
  imports: [WinampLogoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  public items: string[] = ["Player", "Creators", "Learn", "Press", "Jobs"];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-navigation-menu',
  imports: [],
  templateUrl: './header-navigation-menu.component.html',
  styleUrl: './header-navigation-menu.component.scss',
})
export class HeaderNavigationMenuComponent {
  @Input() links: {
    text: string;
    ariaControls?: string;
    ariaExpanded?: string;
    ariaHaspopup?: string;
    ariaFlowto?: string;
  }[] = [];
}

import { Component } from '@angular/core';
import { HeaderNavigationMenuComponent } from '../header-navigation-menu/header-navigation-menu.component';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  standalone: true,
  imports: [HeaderNavigationMenuComponent],
})
export class HeaderNavigationComponent {
  links = [
    { text: 'PROJECTS', ariaControls: 'project-section' },
    { text: 'SERVICES', ariaExpanded: 'false' },
    { text: 'VENTURES', ariaHaspopup: 'false' },
    { text: 'CONTACT', ariaFlowto: 'footer' },
  ];
}

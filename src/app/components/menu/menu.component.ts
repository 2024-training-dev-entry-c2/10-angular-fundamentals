import { booleanAttribute, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@interfaces/menu.item.interface';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input({transform: booleanAttribute}) isFooterMenu: boolean = false;

  menuItems: MenuItem[] = [
    {
      title: 'overview',
      url: 'https://getdooapp.com/',
      aria: 'Go to overview section',
      classes: 'nav__link nav__link--active nav__link--hover',
      showInFooter: true
    },
    {
      title: 'features',
      url: 'https://getdooapp.com/features',
      aria: 'Go to features section',
      classes: 'nav__link nav__link--hover',
      showInFooter: true
    },
    {
      title: 'support',
      url: 'https://getdooapp.com/support',
      aria: 'Go to support section',
      classes: 'nav__link nav__link--hover',
      showInFooter: true
    },
    {
      title: 'contact',
      url: 'https://getdooapp.com/contact',
      aria: 'Go to contact section',
      classes: 'nav__link nav__link--hover',
      showInFooter: true
    },
    {
      title: 'download',
      url: 'https://apps.apple.com/us/app/id1515371154',
      aria: 'Download for IOS',
      classes: 'nav__link nav__link--hover',
      showInFooter: false
    },

  ];

}

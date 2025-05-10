import { Component, output } from '@angular/core';
import { LanguageModalService } from '../../../language-modal.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuLinks = [
    {
      text: 'Pricing',
      href: '#'
    },
    {
      text: 'Careers',
      href: '#'
    },
    {
      text: 'Login',
      href: '#'
    }
  ]

  constructor(private languageModalService: LanguageModalService) {}

  openModal(): void {
    this.languageModalService.emitMenuEvent(true);
  }
}

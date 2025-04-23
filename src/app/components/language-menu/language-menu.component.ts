import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-language-menu',
  imports: [],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LanguageMenuComponent {
  @Input() public items!: string[];
}

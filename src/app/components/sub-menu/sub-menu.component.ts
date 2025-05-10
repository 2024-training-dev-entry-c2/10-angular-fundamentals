import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {
  @Input() public title: string = ''; // Título principal
  @Input() public cards: { imgSrc: string; altText: string; label: string }[] =
    []; 
    @Input() public links: {
      title: string;
      ref: { href: string; text: string }[];
    } = {
      title: '',
      ref: []
    };

  @Input() public colorCard: string = '#1e3c72';
  @Input() public classCard: string = 'card';
}

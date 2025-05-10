import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public svg = input<string>();
  public title = input<string>();
  public description = input<string>();
  public url = input<{text: string, href: string}>();
}

import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-interactive-card',
  imports: [CommonModule],
  templateUrl: './interactive-card.component.html',
  styleUrl: './interactive-card.component.scss'
})
export class InteractiveCardComponent {
  data = input<any>();
}

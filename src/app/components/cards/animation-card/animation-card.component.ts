import { Component, input } from '@angular/core';

@Component({
  selector: 'app-animation-card',
  imports: [],
  templateUrl: './animation-card.component.html',
  styleUrl: './animation-card.component.scss'
})
export class AnimationCardComponent {
  data = input<any>();
}

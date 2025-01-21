import { Component, input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent {
  data = input<any[]>();

}

import { Component, Input } from '@angular/core';
import { ReviewData } from '@interfaces/review.data.interface';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent {
  @Input() reviews: ReviewData = ({} as ReviewData);

}

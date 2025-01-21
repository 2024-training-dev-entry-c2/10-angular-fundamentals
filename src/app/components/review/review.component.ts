import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReviewCardComponent } from "@components/review-card/review-card.component";
import { ReviewData } from '@interfaces/review.data.interface';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  dataReviews: ReviewData[] = [
    {
      src: 'The_Next_Web_Logo.svg',
      alt: 'The Next Web Review',
      description: 'Doo is a beautiful way to get things done without stressing yourself out.',
      isAward: false
    },
    {
      src: 'Wired-Magazine-Logo.svg',
      alt: 'Wired Magazine Review',
      description: 'There’s just enough guilt involved in hitting snooze that I often just complete the task. That’s the point.',
      isAward: false
    },
    {
      src: 'Buzzfeed-Logo.svg',
      alt: 'The Buzzfeed Review',
      description: 'I absolutely love this app... *incredibly* satisfying...',
      isAward: false
    },
    {
      src: 'best-new-apps.svg',
      alt: 'award best new app',
      isAward: true
    },
    {
      src: 'best-of-2016.svg',
      alt: 'award best app of 2016',
      isAward: true
    }
  ]
}

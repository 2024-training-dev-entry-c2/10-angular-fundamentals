import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards = [
    {
      svg : 'images/integrations.svg',
      title : 'Integrations',
      description : 'Use Gamma with your favorite tools. Embed rich media, including images, videos, and entire websites.',
      url: {
        text : 'Explore integrations',
        href : '#'
      }
    },
    {
      svg : 'images/insights.svg',
      title : 'Gamma Insights',
      description : 'Insights from the minds behind Gamma on how to put your best work forward.',
      url: {
        text : 'Read the latest',
        href : '#'
      }
    },
    {
      svg : 'images/aiPwt.svg',
      title : 'AI PowerPoint',
      description : 'Create presentations in Gamma and export to PowerPoint in one click.',
      url: {
        text : 'Read about AI PowerPoints',
        href : '#'
      }
    },
    {
      svg : 'images/templates.svg',
      title : 'Presentation templates',
      description : 'Customize one of our ready-made templates, or look for inspiration.',
      url: {
        text : 'Browse templates',
        href : '#'
      }
    }
  ]

}

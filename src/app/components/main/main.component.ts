import { Component } from '@angular/core';
import { FinalMessageComponent } from '../final-message/final-message.component';

export interface MainSection {
  id: string;
  title: string;
  listItems: Array<string>;
  paragraphs?: Array<string>;
  hasSpanWith?: boolean;
  imageSrc: string;
  imageAlt: string;
  layout: 'normal' | 'reverse';
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FinalMessageComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  mainSections: MainSection[] = [
    {
      id: 'section1-title',
      title: 'It is a time for builders.',
      listItems: [
        "You're assembling impactful teams.",
        "You're innovating at scale.",
        "You're accelerating the mission.",
        "You're delivering the transformation.",
      ],
      paragraphs: [
        "This isn't the first mountain you've climbed, and it won't be the last.",
        "Each success leads to your next project of consequence, ever increasing in scope and significance.",
      ],
      imageSrc: './images/section1.svg',
      imageAlt: 'Illustration of a mountain climb symbolizing progress and challenges.',
      layout: 'normal',
    },
    {
      id: 'section2-title',
      title: "You've slayed dragons before, but always with the right people.",
      listItems: [
        'The deputies who advance your initiatives without making you the bottleneck.',
        'The capabilities and experiences that level up your team.',
        'The rare engineering talent that creates a whole greater than the sum of its parts.',
      ],
      paragraphs: [
        'All respecting legacy constraints of security and scale. Your teams incept ripples of change across the organization.',
      ],
      imageSrc: './images/section2.svg',
      imageAlt: 'Illustration of teamwork and collaboration.',
      hasSpanWith: true,
      layout: 'reverse',
    },
    {
      id: 'section3-title',
      title: "Master Chef, your ingredients are ready. Let's get cooking.",
      listItems: [
        'Discover senior technology leaders inspired to support enterprise innovators.',
        'Deploy teams of Atlantis engineers purpose-built for your project of consequence.',
        "Together, we'll leverage their relevant experiences and honed skills, to solve and prevent problems and accelerate your deliverables.",
      ],
      imageSrc: './images/section3.svg',
      imageAlt: 'Illustration of a cooking metaphor for teamwork and solutions.',
      layout: 'normal',
    },
    {
      id: 'section4-title',
      title: 'The symphony is playing, and your stakeholders are inspired.',
      listItems: [
        'A catalyst of change, you have conducted something novel and a new paradigm reigns.',
        "You've enhanced and augmented your team, in collaboration with your global talent to make everybody better.",
      ],
      paragraphs: [
        'The sun never sets on the development cycle. A new era of innovation dawns.',
      ],
      imageSrc: './images/section4.svg',
      imageAlt: 'Illustration of a symphony representing harmony in teamwork.',
      hasSpanWith: true,
      layout: 'reverse',
    },
  ];
  

  finalMessage = {
    title: 'Dedicated to Projects of Consequence. Especially yours.',
    buttonText: 'LEARN MORE',
  };
}

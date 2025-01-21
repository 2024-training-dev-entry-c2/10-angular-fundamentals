import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  headItems = signal([
    {
      number: '01',
      title: 'Our Mission',
      description: 'Make humans better—a lot better',
      hasLine: true,
      id: 1,
    },
    {
      number: '02',
      title: 'Our Vision',
      description: 'Lead the future of Invisible Computing',
      hasLine: true,
      id: 2,
    },
    {
      number: '03',
      title: 'Our Ambition',
      description: 'Simplify Heads-Up Computing',
      hasLine: false,
      id: 3,
    },
  ]);
}

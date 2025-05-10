import { Component } from '@angular/core';
import { MainAboutCtaComponent } from '../main-about-cta/main-about-cta.component';

@Component({
  selector: 'app-main-about',
  imports: [MainAboutCtaComponent],
  templateUrl: './main-about.component.html',
  styleUrl: './main-about.component.scss',
})
export class MainAboutComponent {
  aboutTexts: string[] = [
    'We are a team of two senior designers united by a shared passion for good design, new technology, and a better way of doing things.',
    'We believe it is our duty to help businesses embrace the unconventional and equip them with outputs that drive outcomes.',
  ];
}

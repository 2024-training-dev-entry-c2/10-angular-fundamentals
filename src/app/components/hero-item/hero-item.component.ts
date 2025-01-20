import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() videoSrc: string = '';
  @Input() text: string = '';
  @Input() link: string = '#';

}

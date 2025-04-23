import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scroll-wrapper',
  imports: [],
  templateUrl: './scroll-wrapper.component.html',
  styleUrl: './scroll-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
  
})
export class ScrollWrapperComponent {
  public handleScroll(event: Event): void {
    const target = event.target as HTMLElement;
    console.log(target.scrollTop);
  }
}

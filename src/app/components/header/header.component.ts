import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const navbar = document.querySelector<HTMLElement>('.header__nav');
    if(navbar){
      if(window.scrollY > 50){
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  headerMenuItems = [
    { label: 'SOFTWARE ENGINEERING', link: '#' },
    { label: 'APPROACH', link: '#' },
    { label: 'PROJECTS', link: '#' },
    { label: 'ABOUT US', link: '#' },
    { label: 'CAREERS', link: '#' }
  ];
}

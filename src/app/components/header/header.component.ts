import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const navbar = document.querySelector<HTMLElement>('.header__nav');
    if(navbar) {
      if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  @Input() menuItems: { label: string, link: string }[] = []; 
  @Output() menuItemClick = new EventEmitter<string>();

  onMenuItemClick(label: string) {
    this.menuItemClick.emit(label);
  }
}

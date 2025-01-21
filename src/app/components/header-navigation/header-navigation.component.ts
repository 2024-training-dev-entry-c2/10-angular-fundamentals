import { Component, AfterViewInit } from '@angular/core';
import { HeaderNavigationMenuComponent } from '../header-navigation-menu/header-navigation-menu.component';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  standalone: true,
  imports: [HeaderNavigationMenuComponent],
})
export class HeaderNavigationComponent implements AfterViewInit {
  links = [
    { text: 'PROJECTS', ariaControls: 'project-section' },
    { text: 'SERVICES', ariaExpanded: 'false' },
    { text: 'VENTURES', ariaHaspopup: 'false' },
    { text: 'CONTACT', ariaFlowto: 'footer' },
  ];

  ngAfterViewInit(): void {
    let lastScrollTop = 0;
    let rotation = 0;

    window.addEventListener('scroll', () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;
      const svgs = document.querySelectorAll<SVGElement>(
        '.duties__nav-link svg'
      );
      const scrollAmount = Math.abs(scrollTop - lastScrollTop);
      const rotationAmount = Math.min(scrollAmount / 5, 15);

      rotation += isScrollingDown ? rotationAmount : -rotationAmount;

      svgs.forEach((svg) => {
        svg.style.transform = `rotate(${rotation}deg)`;
      });

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>('.duties__nav-link');
  }
}

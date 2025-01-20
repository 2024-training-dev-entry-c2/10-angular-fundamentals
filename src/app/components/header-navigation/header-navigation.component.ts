import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  imports: [],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.scss',
})
export class HeaderNavigationComponent implements AfterViewInit {
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

    navLinks.forEach((link) => {
      let originalTransform: string;

      link.addEventListener('mouseover', () => {
        const svgs = link.querySelectorAll<SVGElement>('svg');
        svgs.forEach((svg) => {
          originalTransform = svg.style.transform;
          svg.classList.remove('stop-spin');
          svg.style.animation =
            'spin 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
        });
      });

      link.addEventListener('mouseout', () => {
        const svgs = link.querySelectorAll<SVGElement>('svg');
        svgs.forEach((svg) => {
          svg.classList.add('stop-spin');
          svg.style.animation =
            'spin-reverse 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
        });
      });

      link.querySelectorAll<SVGElement>('svg').forEach((svg) => {
        svg.addEventListener('animationend', () => {
          svg.style.transform = originalTransform;
        });
      });
    });
  }
}

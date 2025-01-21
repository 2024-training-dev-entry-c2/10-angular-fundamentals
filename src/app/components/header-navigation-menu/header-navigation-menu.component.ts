import { AfterViewInit, Component, Input } from '@angular/core';
import { HeaderLink } from '../../interfaces/hader-links.interface';

@Component({
  selector: 'app-header-navigation-menu',
  imports: [],
  templateUrl: './header-navigation-menu.component.html',
  styleUrl: './header-navigation-menu.component.scss',
})
export class HeaderNavigationMenuComponent implements AfterViewInit {
  @Input() links: HeaderLink[] = [];

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

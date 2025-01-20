import { Component, AfterViewInit } from '@angular/core';
import { projects } from './projects-data';
import { MainIntroComponent } from '../main-intro/main-intro.component';
import { MainProjectComponent } from '../main-project/main-project.component';
import { MainAboutComponent } from '../main-about/main-about.component';
import { MainSeparatorComponent } from '../main-separator/main-separator.component';

@Component({
  selector: 'app-main',
  imports: [
    MainIntroComponent,
    MainProjectComponent,
    MainAboutComponent,
    MainSeparatorComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  projects = projects;

  ngAfterViewInit(): void {
    const ctaElements = document.querySelectorAll(
      '.duties__project-cta, .duties__about-cta'
    );

    ctaElements.forEach((cta) => {
      const icon = cta.querySelector(
        '.duties__project-cta-icon, .duties__about-cta-icon'
      ) as SVGElement;

      if (icon) {
        const clone = icon.cloneNode(true) as SVGElement;
        clone.classList.add('duties__about-cta-icon-clone');
        cta.appendChild(clone);

        let originalTransform = icon.style.transform;

        cta.addEventListener('mouseenter', () => {
          originalTransform = icon.style.transform;
          icon.style.animation = 'moveRight 0.5s forwards';
          clone.style.animation = 'appear 0.5s forwards';
        });

        cta.addEventListener('mouseleave', () => {
          icon.style.animation = 'moveLeft 0.5s forwards';
          clone.style.animation = 'disappear 0.5s forwards';
        });

        icon.addEventListener('animationend', () => {
          icon.style.transform = originalTransform;
        });

        clone.addEventListener('animationend', () => {
          clone.style.transform = originalTransform;
        });
      }
    });
  }
  handleProjectClick(title: string) {
    console.log('Project clicked:', title);
  }
}

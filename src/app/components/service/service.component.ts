import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  activeService: string = 'wiki';

  services = [
    {
      id: 'servicios-wiki',
      name: 'Wikis',
      icon: '../../../public/icon/wiki.PNG',
      type: 'wiki',
    },
    {
      id: 'servicios-docs',
      name: 'Docs',
      icon: '../../../public/icon/Doc.PNG',
      type: 'docs',
    },
    {
      id: 'servicios-projects',
      name: 'Projects',
      icon: '../../../public/icon/project.svg',
      type: 'projects',
    },
    {
      id: 'servicios-ai',
      name: 'Ai',
      icon: '../../../public/icon/face.PNG',
      type: 'ai',
    },
    {
      id: 'servicios-calendar',
      name: 'Calendar',
      icon: '../../../public/icon/calendar.PNG',
      type: 'calendar',
    },
    {
      id: 'servicios-sites',
      name: 'Sites',
      icon: '../../../public/icon/sites.PNG',
      type: 'sites',
    },
  ];

  imagenes = [
    {
      src: '../../../public/images/carousel/Wiki-V2.webp',
      alt: 'imagen de onboarding',
      class: 'services__image--wiki',
      type: 'wiki',
    },
    {
      src: '../../../public/images/carousel/Docs-V2.webp',
      alt: 'imagen de documentos',
      class: 'services__image--docs',
      type: 'docs',
    },
    {
      src: '../../../public/images/carousel/Projects-V2.webp',
      alt: 'imagen de un projects',
      class: 'services__image--projects',
      type: 'projects',
    },
    {
      src: '../../../public/images/carousel/AI-V2.webp',
      alt: 'imagen de inteligencia artificial',
      class: 'services__image--ai',
      type: 'ai',
    },
    {
      src: '../../../public/images/carousel/calendar.webp',
      alt: 'imagen de un calendario de estudio',
      class: 'services__image--calendar',
      type: 'calendar',
    },
    {
      src: '../../../public/images/carousel/sites.webp',
      alt: 'imagen de sitio de diseño',
      class: 'services__image--sites',
      type: 'sites',
    },
  ];

  setActiveService(type: string) {
    this.activeService = type;
  }
}

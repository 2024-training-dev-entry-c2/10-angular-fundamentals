import { Component } from '@angular/core';
import { ItemplateCard } from '../../interfaces/templateCards';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  cards: ItemplateCard[] = [
    {
      icon: '../../../public/icon/moto.svg',
      alt: 'icono de motocicleta',
      title: 'Project Roadmap',
    },
    {
      icon: '../../../public/icon/table.svg',
      alt: 'icono de tablero',
      title: 'OKRs',
    },
    {
      icon: '../../../public/icon/docYellow.svg',
      alt: 'icono de documento',
      title: 'Meeting Notes',
    },
    {
      icon: '../../../public/icon/vacation.svg',
      alt: 'icono de vacaciones',
      title: 'Vacation Planner',
    },
    {
      icon: '../../../public/icon/calendarGreen.svg',
      alt: 'icono de calendario',
      title: 'Editorial Calendar',
    },
    {
      icon: '../../../public/icon/check.svg',
      alt: 'icono de verificación',
      title: 'Habit Tracker',
    },
  ];
}

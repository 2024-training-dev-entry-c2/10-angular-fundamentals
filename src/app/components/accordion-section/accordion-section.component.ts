import { Component } from '@angular/core';
import { AcordionComponent } from '../acordion/acordion.component';

@Component({
  selector: 'app-accordion-section',
  standalone: true,
  imports: [AcordionComponent],
  templateUrl: './accordion-section.component.html',
  styleUrl: './accordion-section.component.scss',
})
export class AccordionSectionComponent {}

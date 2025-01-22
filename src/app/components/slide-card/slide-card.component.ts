import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-card',
  imports: [],
  templateUrl: './slide-card.component.html',
  styleUrl: './slide-card.component.scss'
})
export class SlideCardComponent {
  // Variables de entrada para los datos dinámicos
  @Input() title: string = '';          // Título de la tarjeta
  @Input() subtitle: string = '';       // Subtítulo de la tarjeta
  @Input() description: string = '';    // Descripción de la tarjeta
  @Input() imageUrl: string = '';       // URL de la imagen
  @Input() imageAlt: string = '';       // Texto alternativo de la imagen
}

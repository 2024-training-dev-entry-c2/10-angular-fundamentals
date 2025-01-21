import { Component,input } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  imports: [],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {
  public mensaje = input<string>();
  public imagen = input<string>();
  public nombre = input<string>();
  public usuario = input<string>();
}

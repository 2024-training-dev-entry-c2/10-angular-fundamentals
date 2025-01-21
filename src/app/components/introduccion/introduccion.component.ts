import { Component } from '@angular/core';
import { ListEmpresasComponent } from "../list-empresas/list-empresas.component";
import { JoinComponent } from "../join/join.component";

@Component({
  selector: 'app-introduccion',
  imports: [ListEmpresasComponent,JoinComponent],
  templateUrl: './introduccion.component.html',
  styleUrl: './introduccion.component.scss'
})
export class IntroduccionComponent {
  imageList = [
    { url: 'apple.svg', alt: 'icono de apple' },
    { url: 'google.svg', alt: 'icono de google' },
    { url: 'openai.svg', alt: 'icono de openai' },
    { url: 'shopify.svg', alt: 'icono de shopify' },
    { url: 'obs.svg', alt: 'icono de layers' },
    { url: 'vercel.svg', alt: 'icono de vercel' },
    { url: 'meta.svg', alt: 'icono de meta' },
    { url: 'photoshop.svg', alt: 'icono de opera' },
    { url: 'opera.svg', alt: 'icono de openai' },
    { url: 'radix-ui_light.svg', alt: 'icono de radix' },
    { url: 'figma.svg', alt: 'icono de figma'},
  ];
}

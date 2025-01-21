import { Component,input } from '@angular/core';

@Component({
  selector: 'app-list-empresas',
  imports: [],
  templateUrl: './list-empresas.component.html',
  styleUrl: './list-empresas.component.scss'
})
export class ListEmpresasComponent {
  public images = input<{ url: string; alt?: string }[]>();
}
  
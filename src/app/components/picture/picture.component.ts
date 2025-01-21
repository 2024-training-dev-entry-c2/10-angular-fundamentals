import { Component, input } from '@angular/core';

@Component({
  selector: 'app-picture',
  imports: [],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss'
})
export class PictureComponent {
  public name = input<string>();
  public light = input<string>();
  public dark = input<string>();
  public alt = input<string>();
}

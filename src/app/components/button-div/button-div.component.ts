import { Component, input } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-div',
  imports: [CommonModule],
  templateUrl: './button-div.component.html',
  styleUrl: './button-div.component.scss'
})
export class ButtonDivComponent {
  public items = input<IMenuItem[]>();
}

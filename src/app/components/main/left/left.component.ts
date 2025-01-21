import { Component, output } from '@angular/core';

@Component({
  selector: 'app-left',
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {
  public onClick = output<boolean>();

  public openModal() {
    this.onClick.emit(true);
  }
}

import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from "./right/right.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-main',
  imports: [LeftComponent, RightComponent, ModalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public isOpen: boolean = false;

  openModal(event: boolean) {
    this.isOpen = event;
  }
}

import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  public open = input.required<boolean>();
  public clickClose = output<boolean>();

  private modal = document.querySelector('dialog') as HTMLDialogElement;

  public openModal() {
    if (this.open()) {
      this.modal.showModal();
    } 
    else {
      this.modal.close();
    }
  }

  public closeModal() {
    this.clickClose.emit(false);
  }
}

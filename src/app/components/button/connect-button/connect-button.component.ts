import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-connect-button',
  imports: [],
  templateUrl: './connect-button.component.html',
  styleUrl: './connect-button.component.scss'
})
export class ConnectButtonComponent {
  public titleButton = input<string>();
  public mensajeEnviado = output<string>();

  buttonIsClicked(){
    this.mensajeEnviado.emit("Button connect clickeado");
  }
}

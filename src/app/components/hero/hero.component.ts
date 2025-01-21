import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ConnectButtonComponent } from '../button/connect-button/connect-button.component';
import { ReturnColorSvgComponent } from "../../svg/hero/return-color-svg/return-color-svg.component";
import { ResetColorSvgComponent } from "../../svg/hero/reset-color-svg/reset-color-svg.component";
import { HeadPrintableComponent } from "../../svg/hero/head/head-printable/head-printable.component";

@Component({
  selector: 'app-hero',
  imports: [ConnectButtonComponent, ReturnColorSvgComponent, ResetColorSvgComponent, HeadPrintableComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public resetColor: boolean = false;
  public buttonCircleName = 'CONNECT';
  public msgButtonConect = '';
  public colours = [
    'select color yellow button',
    'select color orange button',
    'select color red button',
    'select color pink button',
    'select color dark pink button',
    'select color green button',
    'select color blue button',
    'select color violet button',
  ];

  getMessage(msg: string) {
    this.msgButtonConect = msg;
  }

  handleClick(): void {
    this.resetColor = true;
  }

  resetColorClick(): void {
    this.resetColor = false;
  }
}

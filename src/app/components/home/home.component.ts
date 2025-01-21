import { Component } from '@angular/core';
import { ButtonScrollComponent } from '../button-scroll/button-scroll.component';


@Component({
  selector: 'app-home',
  imports: [ ButtonScrollComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

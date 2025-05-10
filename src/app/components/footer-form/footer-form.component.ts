import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-form',
  imports: [],
  templateUrl: './footer-form.component.html',
  styleUrl: './footer-form.component.scss'
})
export class FooterFormComponent {



   subscribe(email: string): void {
    if (email) {
      console.log('Email subscribed:', email);
    } else {
      console.log('Email field is empty');
    }
  }
}

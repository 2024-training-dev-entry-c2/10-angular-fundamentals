import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ProductComponent,
    TestimonialComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-product></app-product>
    <app-testimonial></app-testimonial>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

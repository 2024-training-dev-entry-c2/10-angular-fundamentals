import { Component } from '@angular/core';
import { ShippingAndReturnsComponent } from "../../svg/footer/shipping-and-returns/shipping-and-returns.component";
import { EmailComponent } from "../../svg/footer/email/email.component";
import { BeComponent } from "../../svg/footer/be/be.component";
import { LinkedinComponent } from "../../svg/footer/linkedin/linkedin.component";
import { InstagramSvgComponent } from '../../svg/footer/instagram-svg/instagram-svg.component';

@Component({
  selector: 'app-footer',
  imports: [ShippingAndReturnsComponent, EmailComponent, InstagramSvgComponent, BeComponent, LinkedinComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

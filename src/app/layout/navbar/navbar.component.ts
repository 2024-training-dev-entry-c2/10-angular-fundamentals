import { Component } from '@angular/core';
import { SubMenuComponent } from "../../components/sub-menu/sub-menu.component";

@Component({
  selector: 'app-navbar',
  imports: [SubMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menu = [{
    label: "Developers",
    svg: "assets/svgs/arrow.svg",
    sub: {
        list: [{
          href: "#",
          single: false,
          svg: "assets/svgs/connectKit.svg",
          option: "ConnectKit",
          description: "Connecting a wallet, made simple."
        },
        {
          href: "#",
          single: false,
          svg: "assets/svgs/api.svg",
          option: "API",
          info: "Contact Sales",
          description: "Granular data, blazing fast speeds."
        }]
    }
  }, {
    label: "Resources",
    svg: "assets/svgs/arrow.svg",
    sub: {
        list: [
          {
            href: "#",
            single: true,
            option: "Blog"
          },
          {
            href: "#",
            single: true,
            option: "Changelog"
          },
          {
            href: "#",
            single: true,
            option: "Help & Support"
          },
          {
            href: "#",
            single: true,
            option: "FAQs"
          }
        ]
    }
  }, {
    label: "X (Twitter)",
  }];

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  menu = [
    {
      label: "Developers",
      sub: ["Documentation", "ConnectKit", "GitHub"]
    },
    {
      label: "Resources",
      sub: ["Audit Report", "Changelog", "Blog", "FAQs", "Press Kit"]
    },
    {
      label: "Company",
      sub: ["Contact", "X (Twitter)", "Legal"]
    }
  ];

  navIcons = [
    "assets/svgs/git.svg#github-icon",
    "assets/svgs/x.svg#x-icon",
    "assets/svgs/mail.svg#mail-icon"
  ];
}

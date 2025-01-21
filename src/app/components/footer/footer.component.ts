import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public items = [
    {link: 'https://docs.glow.app/', name: 'Docs'},
    {link: 'https://glow.app/support', name: 'Support'},
    {link: 'https://glow.app/terms', name: 'Terms'},
    {link: 'https://glow.app/privacy-policy', name: 'Privacy'},
    {link: 'https://glow.app/bug-bounty', name: 'Bug Bounty'},
    {link: 'https://twitter.com/glowwallet'}
  ]
}

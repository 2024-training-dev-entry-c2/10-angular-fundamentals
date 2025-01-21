import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerLinks = signal([
    { href: '/products/a1-sense', name: 'A¹ Sense', id: 1  },
    { href: '/products/b1-eye', name: 'B¹ Eye', id: 2 },
    { href: '/neurals/a1-neuro', name: 'A¹ Neuro', id: 3 },
    { href: '/programs', name: 'Programs', id: 4 },
    { href: '/updates', name: 'Updates', id: 5 },
  ]);

  footerLinks1 = signal([
    { href: 'https://www.linkedin.com/company/augenpro/', name: 'LinkedIn', id: 1  },
    { href: 'https://x.com/Augenpro', name: 'X', id: 2 },

  ]);

  footerLinks2 = signal([
    { href: 'https://www.iubenda.com/privacy-policy/51410513/full-legal',
      name: 'Privacy Policy', id: 1
    },
    {
      href: 'https://www.iubenda.com/terms-and-conditions/51410513',
      name: 'Terms of Use', id: 2
    },
    {
      href: 'https://www.iubenda.com/privacy-policy/51410513/cookie-policy',
      name: 'Cookie Policy', id: 3
    },
  ])
}

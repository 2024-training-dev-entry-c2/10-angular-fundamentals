import { Component, output } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ActionComponent } from './action/action.component';

@Component({
  selector: 'app-informative-article',
  imports: [NavigationComponent, ActionComponent],
  templateUrl: './informative-article.component.html',
  styleUrl: './informative-article.component.scss'
})
export class InformativeArticleComponent {
  public onClick = output<boolean>();

  propagateClick(event: boolean) {
    this.onClick.emit(event);
  }
  
  public navigations = [
    {
      url: 'https://chrome.google.com/webstore/detail/glow-solana-wallet-beta/ojbcfhjmpigfobfclfflafhblgemeidi?hl=en&authuser=0',
      image: 'chrome.png',
      alt: 'Chrome browser logo, click to add Glow wallet to Chrome.',
      title: 'Chrome'
    },
    {
      url: 'https://microsoftedge.microsoft.com/addons/detail/glow-solana-wallet/niihfokdlimbddhfmngnplgfcgpmlido',
      image: 'edge.png',
      alt: 'Edge browser logo, click to add Glow wallet to Edge.',
      title: 'Edge'
    },
    {
      url: 'https://addons.mozilla.org/en-US/firefox/addon/glow-solana-wallet/',
      image: 'firefox.png',
      alt: 'Firefox browser logo, click to add Glow wallet to Firefox.',
      title: 'Firefox'
    },
    {
      url: 'https://chrome.google.com/webstore/detail/glow-solana-wallet-beta/ojbcfhjmpigfobfclfflafhblgemeidi?hl=en&authuser=0',
      image: 'brave.png',
      alt: 'Brave browser logo, click to add Glow wallet to Brave.',
      title: 'Brave',
      modifier: 'brave'
    }
  ];

  public actions = [
    {
      svg: "apple",
      title: "Get for iOS"
    },
    {
      svg: "android",
      title: "Get for Android"
    }
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-important-points',
  imports: [],
  templateUrl: './important-points.component.html',
  styleUrl: './important-points.component.scss'
})
export class ImportantPointsComponent {
  points = [
    {
      src: "assets/videos/details-real-time.webm",
      title: "Monitor In Real-Time",
      description: "Track the status of all your transactions in real-time, with live updates, detailed information, notifications, and seamless animations between states. You’ll be the first to know when your transactions go through."
    },
    {
      src: "assets/videos/details-assets.webm",
      title: "Protect Your Assets",
      description: "Understand your transactions before you send them and receive warnings about potentially harmful actions. Get full protection over all of your assets, with help from advanced simulations and suggested actions."
    },
    {
      src: "assets/videos/details-wallet.webm",
      title: "Organise Your Wallet",
      description: "Take full control over your wallet with powerful organization across all assets. Rearrange your tokens and collectibles, star your favorites, or move things to the trash when you want to do some spring-cleaning."
    },
    {
      src: "assets/videos/details-clearly.webm",
      title: "See Everything Clearly",
      description: "Alleviate all confusion with crystal clear breakdowns of your wallets and their respective grouping. Whether you have two wallets or two hundred, Family provides a birds eye view into your entire setup with unmatched clarity."
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {

  publications = [
    {
      img: "assets/images/family-launch.png",
      date: "Published 11 November, 2024",
      title: "Avara Launches Family: The Feature-Rich Crypto Wallet",
      description: "With features for beginners and experienced users alike, Family makes interacting with web3 secure, effortless and fun."
    },
    {
      img: "assets/images/avara.png",
      date: "Published 16 November, 2023",
      title: "Family Acquired by Avara (Aave Companies)",
      description: "I'm thrilled to announce that Los Feliz Engineering (LFE)—the company behind Family and previously, Honk—has been acquired by Avara, formerly known as Aave Companies."
    }
  ]
}

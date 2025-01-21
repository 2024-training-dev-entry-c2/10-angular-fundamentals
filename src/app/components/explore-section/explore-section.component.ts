import { Component } from '@angular/core';
import { InfoCardComponent } from '../cards/info-card/info-card.component';

@Component({
  selector: 'app-explore-section',
  imports: [InfoCardComponent],
  templateUrl: './explore-section.component.html',
  styleUrl: './explore-section.component.scss'
})
export class ExploreSectionComponent {

  exploreOptions = [
    {
      first: true,
      img: "assets/videos/easy-section-explore.webm",
      title: "Easy",
      description: "Whether you're a beginner or seasoned pro, Family makes it easy."
    },
    {
      first: false,
      img: "assets/videos/secure-section-explore.webm",
      title: "Secure",
      description: "Your crypto, your control.",
      description2: "Security at every stage."
    },
    {
      first: false,
      img: "assets/videos/fast-section-explore.webm",
      title: "Fast",
      description: "Uncompromising speed.",
      description2: "Optimal performance, all the time."
    },
    {
      first: false,
      img: "assets/videos/power-section-explore.webm",
      title: "Powerful",
      description: "Experience the full power of Ethereum with advanced features."
    },
    {
      first: false,
      img: "assets/videos/fun-section-explore.webm",
      title: "Fun",
      description: "Family takes fun seriously. Delightful interactions with every tap."
    }
  ]
}

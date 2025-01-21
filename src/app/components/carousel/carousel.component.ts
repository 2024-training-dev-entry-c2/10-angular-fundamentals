import { Component } from '@angular/core';
import { CommentCardComponent } from "../cards/comment-card/comment-card.component";

@Component({
  selector: 'app-carousel',
  imports: [CommentCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  firtsComment = [
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Ella Rivera",
      user: "EllaRiv",
      comment: "Absolutely loving the experience on @family beta. It feels seamless and incredibly intuitive!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Sofia González",
      user: "SofiG",
      comment: "The @family beta has nailed the user experience that bridges web2 and web3 effortlessly."
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Maya Torres",
      user: "MayaT",
      comment: "Excited about how smooth and engaging the @family beta platform is. A game-changer!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Camila Martínez",
      user: "CamiMart",
      comment: "Tried the @family beta and it's by far the best UI I've seen in the space. Loving it!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Valeria López",
      user: "ValeLopez",
      comment: "I can't believe how polished and user-friendly the @family beta feels. This is the future!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Renata Fernández",
      user: "RenFern",
      comment: "The @family beta is exactly what I hoped for. Sleek, fast, and user-centered design."
    }
  ];

  secondComment = [
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Isabella Reyes",
      user: "IsabellaR",
      comment: "The @family beta is so smooth and intuitive. This is the UI/UX we've been waiting for!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Amelia Vargas",
      user: "AmeliaV",
      comment: "Just tried @family beta, and wow, it feels like the perfect balance between web2 and web3!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Natalia Cruz",
      user: "NataliaC",
      comment: "Loving how clean and simple the @family beta experience is. It's a joy to use!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Emily Herrera",
      user: "EmilyH",
      comment: "The @family beta has exceeded all expectations. It's fast, modern, and beautifully designed."
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Gabriela Ortiz",
      user: "GabiOrtiz",
      comment: "Finally, a platform like @family beta that makes web3 accessible and user-friendly!"
    },
    {
      img: "assets/images/profiles/web3emm.jpeg",
      name: "Luciana Pérez",
      user: "LucianaP",
      comment: "Exploring the @family beta has been amazing. It’s everything I hoped it would be and more!"
    }
  ];

  getComment(comment: any) {
    console.log(comment)
  }

}

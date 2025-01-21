import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ExploreSectionComponent } from "./components/explore-section/explore-section.component";
import { AnimationCardComponent } from './components/cards/animation-card/animation-card.component';
import { DetailsCardComponent } from './components/cards/details-card/details-card.component';
import { InteractiveCardComponent } from "./components/cards/interactive-card/interactive-card.component";
import { ResumeCardComponent } from "./components/cards/resume-card/resume-card.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { PublicationsComponent } from "./components/publications/publications.component";
import { ImportantPointsComponent } from "./components/important-points/important-points.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BannerComponent, ExploreSectionComponent, AnimationCardComponent, DetailsCardComponent, InteractiveCardComponent, ResumeCardComponent, CarouselComponent, PublicationsComponent, ImportantPointsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pictures = {
    title: "Send, receive, swap.",
    subtitle: "All in one place.",
    videos: [
      "assets/videos/send.webm",
      "assets/videos/receive.webm",
      "assets/videos/swap.webm"
    ]
  };

  details = [
    {
      title: "Send & Receive",
      description: "Flawless essentials. Easily send tokens and collectibles with the fewest taps, or share your wallet address by simply scanning a personalized QR code to receive new assets."
    },
    {
      title: "Decentralized Swaps",
      description: "Trade thousands of tokens with minimal fees, 24/7. Family ensures optimal prices from various exchanges so you can acquire the tokens you want, whenever you want them."
    },
    {
      title: "Full NFT Support",
      description: "Experience NFTs in their intended format with our full rich media support. Interact with everything, including video, audio, images, and interactive content. The best collectors manage their collections in Family."
    },
    {
      title: "WalletConnect Enabled",
      description: "Easily access decentralized apps with WalletConnect in Family. Simply pair your wallet with the built-in scanner, and enjoy seamless connectivity to a range of powerful applications across web3."
    },
    {
      title: "Self-Custody",
      description: "Family is committed to delivering robust security with flexibility to suit your preferences. The self-custodial wallet prioritizes your control, giving you direct access to your private keys and sensitive data at all times."
    },
    {
      title: "Maximum Privacy",
      description: "Explore web3 on your own terms, with no compromises on privacy or revealing more than you’re comfortable with. Family works with or without an email or phone number, letting you choose the experience that’s right for you."
    }
  ];

  interactiveNFTs = {
    reverse: false, 
    image: true,
    clip: "assets/videos/nfts.webm",
    theme: "Seamless",
    title: "The best way to experience NFTs.",
    description: "View NFTs in their ideal intended format. Full rich media support no matter the type, from video and audio, to images and interactive.",
    points: true,
    button: true,
    buttonTitle: "Manage your collectibles",
    buttonDescription: "Watch the demo",
    buttonImage: "assets/images/demo-nfts.png",
    list: [
      {
        label: "Images",
        svg: "assets/svgs/images.svg"
      },
      {
        label: "Video",
        svg: "assets/svgs/video.svg"
      },
      {
        label: "3D Models",
        svg: "assets/svgs/3dModels.svg"
      },
      {
        label: "Audio",
        svg: "assets/svgs/audio.svg"
      },
      {
        label: "Interactive Models",
        svg: "assets/svgs/interactiveModels.svg"
      },
      {
        label: "AR Models",
        svg: "assets/svgs/arModels.svg"
      }
    ]
  };

  interactiveWallets = {
    reverse: true, 
    image: true,
    class: "wallet",
    clip: "assets/videos/wallets.webm",
    theme: "Simple",
    title: "Watch the wallets you care about.",
    description: "Keep up to date with unlimited wallets in view-only mode by entering an address or ENS name, and get real-time notifications on any new activity.",
    points: false,
    button: true,
    buttonTitle: "Watching Wallets",
    buttonDescription: "Watch the demo",
    buttonImage: "assets/images/demo-wallets.png",
    list: [
      {
        label: "Watch Any Wallet",
        svg: "assets/svgs/walletCheck.svg"
      },
      {
        label: "Rich Notifications",
        svg: "assets/svgs/walletCheck.svg"
      },
      {
        label: "Fully Customizable",
        svg: "assets/svgs/walletCheck.svg"
      }
    ]
  };

  interactiveCare = {
    reverse: false, 
    image: true,
    class: "care",
    clip: "assets/videos/wallets-care.webm",
    theme: "Understandable",
    title: "Wallet activity you can understand.",
    description: "Your transactions and wallet history is readable at a glance. No more having to decipher what confusing events with weird names mean. We do that for you.",
    points: false,
    button: true,
    buttonTitle: "Watching Activity",
    buttonDescription: "Watch the demo",
    buttonImage: "assets/images/demo-wallets.png",
    list: [
      {
        label: "Human-Readable Activity",
        svg: "assets/svgs/careCheck.svg"
      },
      {
        label: "Real-Time Monitoring",
        svg: "assets/svgs/careCheck.svg"
      },
      {
        label: "Custom Filtering",
        svg: "assets/svgs/careCheck.svg"
      }
    ]
  };

  interactiveSecure = {
    reverse: false, 
    image: false,
    class: "secure",
    clip: "assets/videos/wallet-activity.webm",
    theme: "Secure",
    title: "Relentless protection. Restful ease.",
    description: "Family is fully self-custodial, meaning only you have access to your wallet and its private keys. We have no control over your crypto, nor do we want any.",
    points: false,
    button: false,
    list: [
      {
        label: "Self-Custody",
        svg: "assets/svgs/secureCheck.svg"
      },
      {
        label: "Own Your Keys",
        svg: "assets/svgs/secureCheck.svg"
      },
      {
        label: "No Name Required",
        svg: "assets/svgs/secureCheck.svg"
      },
      {
        label: "No Lock-In",
        svg: "assets/svgs/secureCheck.svg"
      },
      {
        label: "Fully Audited",
        svg: "assets/svgs/secureCheck.svg"
      }
    ]
  };

  picturesTwo = {
    title: "Effortless onboarding.",
    subtitle: "Masterful management.",
    videos: [
      "assets/videos/onboarding.webm",
      "assets/videos/mision-control.webm",
      "assets/videos/drag-drop.webm"
    ]
  };

  pocket = {
    title: "Always with you.",
    description: "Pocket is Family's optional self-custody account service. It lets you manage your wallets with just an email/phone and passkey. No more complexity.",
    icon: true,
    button: false,
    image: true,
    iconSource: "assets/svgs/pocketIcon.svg",
    multimedia: "assets/svgs/pocketClip.svg"
  }

  family = {
    title: "Explore Family",
    description: "Family is a beautiful self-custody Ethereum wallet designed to make crypto easy for everyone.",
    icon: false,
    button: true,
    image: false,
    buttonTitle: "Download for iOS",
    buttonImage: "assets/svgs/downloadIcon.svg",
    multimedia: "assets/videos/explore-family.webm"
  }

}
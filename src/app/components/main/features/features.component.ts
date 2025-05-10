import { Component } from '@angular/core';
import { FeatureComponent } from "./feature/feature.component";

@Component({
  selector: 'app-features',
  imports: [FeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      tagline: "Start inspired—every time",
      title: "Create unlimited presentations, websites, and more—in seconds",
      content: "Everything you need to <strong>quickly create and refine content</strong> with advanced AI.",
      testimonial: {
        text: 'Gamma allows me to package up information <b>in ways I can\'t with slides</b>, while still creating good flow for my presentations.',
        author: 'Ann Marie',
        place: 'Director of Product at Koalafi',
        image: 'images/annmarie.jpg'
      },
      videos: [
        { src: 'images/ani1-734508c7.mp4', type: 'mp4' },
        { src: 'images/ani1-ceced283.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Get help whenever you need it",
      title: "Meet your AI-powered design partner",
      points: [
        {
          icon : "🤩",
          text : "Access <strong>best-in-class AI</strong> for text, images, and search"
        },
        {
          icon : "🎨",
          text : "Apply <strong>eye-catching, expert-level</strong> designs and layouts"
        },
        {
          icon : "🪄",
          text : "Quickly <strong>rewrite or autocomplete</strong> your content"
        }
      ],
      testimonial: {
        text: 'Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand. With Gamma, I can get things done <b>so much faster.</b>',
        author: 'John',
        place: 'Co-founder & CEO at Stotles',
        image: 'images/John-Witt.jpg'
      },
      videos: [
        { src: 'images/ani2-7cdf2339.mp4', type: 'mp4' },
        { src: 'images/ani2-f97dbe58.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Design brilliance, no coding skills required",
      title: "Build and share dynamic content effortlessly",
      points: [
        {
          icon : "🎥",
          text : "Engage with interactive <strong>galleries, videos, and embeds</strong>"
        },
        {
          icon : "📈",
          text : "Visualize data with stunning <strong>charts, diagrams, and tables</strong>"
        },
        {
          icon : "🖼️",
          text : "Jumpstart your projects with versatile <strong>pre-made templates</strong>"
        }
      ],
      testimonial: {
        text: 'Notion x Canva is the best way to think about Gamma. It\'s just <b>so nice to use</b>!',
        author: 'Matthias',
        place: 'Senior Strategy Consultant at ODALINE',
        image: 'images/Matthias.jpg'
      },
      videos: [
        { src: 'images/ani3-d29250d3.mp4', type: 'mp4' },
        { src: 'images/ani3-c248fed0.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Seamless integration, effortless output",
      title: "Restyle existing content with a click",
      points: [
        {
          icon : "📄",
          text : "Import <strong>documents</strong> and <strong>presentations</strong> easily"
        },
        {
          icon : "📋",
          text : "Paste text from <strong>any source</strong> in seconds"
        },
        {
          icon : "📤",
          text : "Export unlimited <strong>PDF and PPT files</strong> instantly"
        }
      ],
      testimonial: {
        text: 'We\'ve avoided PowerPoint decks at all costs at our agency, but Gamma offered us a <b>fresh alternative</b> that we love to share with potential clients. Polished and adaptable. We love it!',
        author: 'Emilie',
        place: 'Founder & Principal at Six Eastern',
        image: 'images/Emilie.jpg'
      },
      videos: [
        { src: 'images/ani4-6c8d29b2.mp4', type: 'mp4' },
        { src: 'images/ani4-3cedcc8a.webm', type: 'webm' }
      ]
    },
    {
      tagline: "Easy to share and publish",
      title: "Engage users on any device",
      points: [
        {
          icon : "📱",
          text : "Deliver <strong>mobile-friendly</strong> content on any screen"
        },
        {
          icon : "📊",
          text : "Track engagement with <strong>built-in, advanced analytics</strong>"
        },
        {
          icon : "🔐",
          text : "<strong>Password protect</strong> sensitive files"
        },
        {
          icon : "💬",
          text : "Connect and collaborate in <strong>real-time</strong>"
        }
      ],
      testimonial: {
        text: 'I\'m not a slide deck artist - Gamma makes it super easy for me to convert my documents into engaging presentations for company all hands, and takes me <b>10x less time</b> than fiddling about with pixels on slides. Such a time saver.',
        author: 'Amelia',
        place: 'Co-founder & CEO at',
        image: 'images/amelia.jpg',
        url: {
          text: 'Honeycomb',
          src: '#'
        }
      },
      videos: [
        { src: 'images/ani5-5af11be7.mp4', type: 'mp4' },
        { src: 'images/ani5-0df00355.webm', type: 'webm' }
      ]
    }
  ]
}

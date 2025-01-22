import { Component } from '@angular/core';
import { SlideCardComponent } from '../slide-card/slide-card.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-slide-cards-container',
  imports: [SlideCardComponent, CommonModule],
  templateUrl: './slide-cards-container.component.html',
  styleUrl: './slide-cards-container.component.scss'
})
export class SlideCardsContainerComponent {
  cards = [
    {
      title: 'Prep',
      subtitle: 'Make the most of every conversation with pre-meeting briefs',
      description: 'Get context from your Gmail, Google Calendar, previous meetings, and in-person conversations before your call.',
      imageUrl: 'https://www.limitless.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeeting-prep.a288b879.jpg&w=1080&q=90',
      imageAlt: 'Visual representation of pre-meeting preparation details'
    },
    {
      title: 'Transcript',
      subtitle: 'Stay on top of every moment with accurate transcription',
      description: 'Your conversation is transcribed as it’s happening, making it easy to quickly catch up if you need to.',
      imageUrl: 'https://www.limitless.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeeting-transcript.a5026c4c.jpg&w=1080&q=90',
      imageAlt: 'Example of meeting transcript for preparation'
    },
    {
      title: 'Notes',
      subtitle: 'Say goodbye to manually writing meeting notes',
      description: 'Notes are automatically created as the meeting progresses so you can catch up quickly, and trust that it’s capturing everything.',
      imageUrl: 'https://www.limitless.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeeting-notes.11163976.jpg&w=1080&q=90',
      imageAlt: 'Detailed meeting notes example for preparation'
    },
    {
      title: 'Summary',
      subtitle: 'Be the most reliable teammate with useful summaries and action items',
      description: 'Get practically perfect post-meeting summaries so you always know what happened and what was committed to.',
      imageUrl: 'https://www.limitless.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeeting-summary.59ed6657.jpg&w=1080&q=90',
      imageAlt: 'Summary of a meeting example for preparation'
    }
  ];
}

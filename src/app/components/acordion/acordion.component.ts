import { Component } from '@angular/core';
import { AcordionItemComponent } from '../acordion-item/acordion-item.component';

@Component({
  selector: 'app-acordion',
  standalone: true,
  imports: [AcordionItemComponent],
  templateUrl: './acordion.component.html',
  styleUrl: './acordion.component.scss',
})
export class AcordionComponent {
  public accordionItems = [
    {
      id: 1,
      title: 'Would you say that in person?',
      content:
        "Is this something you'd say in a face-to-face conversation? Be mindful of your words.",
    },
    {
      id: 2,
      title: 'You have more in common than not',
      content:
        'Try to see things from their perspective. You might be surprised at what you find.',
    },
    {
      id: 3,
      title: 'Passionate, not personal',
      content:
        "It's okay to feel strongly about something, but be respectful of others' opinions.",
    },
    {
      id: 4,
      title: 'Cool down before you fire up',
      content:
        "If you're feeling angry or upset, take a break before engaging in a conversation.",
    },
    {
      id: 5,
      title: 'You can’t control or change people',
      content:
        'Accept people for who they are. Trying to change them will only lead to frustration.',
    },
    {
      id: 6,
      title: 'Words have power',
      content:
        'Think about the impact your words might have on others before you post.',
    },
    {
      id: 7,
      title: "Acknowledge people's feelings",
      content:
        "Validate others' feelings. Even if you don't agree, let them know you hear them.",
    },
    {
      id: 8,
      title: 'Compassion is cool',
      content: 'Be kind. A little compassion goes a long way.',
    },
    {
      id: 9,
      title: 'Check your sources',
      content:
        'Verify information before sharing it. Fake news spreads quickly.',
    },
    {
      id: 10,
      title: 'Responses when you don’t agree',
      content: "Find common ground. There's always something to agree on.",
    },
  ];

  handleClick(itemId: string): void {
    console.log('Id: ', itemId);
  }
}

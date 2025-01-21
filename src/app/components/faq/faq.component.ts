import { Component } from '@angular/core';
import { FaqItemComponent } from '../faq-item/faq-item.component';

@Component({
  selector: 'app-faq',
  imports: [FaqItemComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Why should I join the community?',
      answer: 'The community is a great place to surround yourself with...',
    },
    {
      question: 'How often do you run live sessions?',
      answer: 'We host a live session at least once per month.',
    },
    {
      question: 'Are live sessions recorded?',
      answer: 'Yes. All live sessions are recorded and made available...',
    },
    {
      question: 'Will I have any career support?',
      answer: 'Yes, you can book one free session as part of your subscription...',
    },
    {
      question: 'How do I manage my subscription?',
      answer: 'Once signed up, you can log in, and manage your subscription...',
    },
  ];

  onFaqToggled(isOpen: boolean, index: String) {
    console.log(`FAQ #${index} se ha ${isOpen ? 'abierto' : 'cerrado'}.`);
  }

}

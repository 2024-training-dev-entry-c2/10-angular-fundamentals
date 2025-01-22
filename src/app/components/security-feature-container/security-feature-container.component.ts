import { Component } from '@angular/core';
import { SecurityFeatureComponent } from '../security-feature/security-feature.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-feature-container',
  imports: [SecurityFeatureComponent, CommonModule],
  templateUrl: './security-feature-container.component.html',
  styleUrl: './security-feature-container.component.scss'
})
export class SecurityFeatureContainerComponent {
  features = [
    {
      title: 'Your data is protected from hackers',
      description: 'If data falls into an attacker\'s hands, the attacker cannot read the data without also having access to the encryption keys. They won\'t be able to understand or decrypt it.'
    },
    {
      title: 'Your data will never be sold',
      description: 'We pledge never to sell your data or access your data without your permission. We have immutable audit logs and strict code review policies.'
    },
    {
      title: 'Your data is encrypted at rest',
      description: 'All your data is encrypted before it is stored. The data is automatically and transparently decrypted when read by an authorized user.'
    },
    {
      title: 'Your data is encrypted in transit',
      description: 'We employ several security measures to help ensure the authenticity, integrity, and privacy of data in transit. We secure communications using TLS.'
    },
    {
      title: 'Your data is legally protected',
      description: 'The Fifth Amendment protects you from having to perform the act of producing incriminating documents. You can file a motion to quash a subpoena for your Limitless data.'
    },
    {
      title: 'Your data is protected from 3rd party AI providers',
      description: 'Data sent to 3rd party AI providers for transcription and summarization is not used for training and deleted after 30 days.'
    }
  ];
}

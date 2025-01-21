import { Component } from '@angular/core';
import { DividerComponent } from '@components/divider/divider.component';
import { FeaturesSummary } from '@interfaces/features.summary.interface';
import { Link } from '@interfaces/link.interface';
import { LinkComponent } from '@components/link/link.component';

@Component({
  selector: 'app-features-summary',
  standalone: true,
  imports: [DividerComponent, LinkComponent],
  templateUrl: './features-summary.component.html',
  styleUrl: './features-summary.component.scss'
})
export class FeaturesSummaryComponent {

  dataSummary: FeaturesSummary[] = [
    {
      source: 'doo_feature_icon_1.svg',
      imageDescription: 'Doo features icon ask siri',
      title: 'Ask Siri',
      description: 'Use Siri to create tasks, a new list, or mark items completed.'
    },
    {
      source: 'doo_feature_icon_2.svg',
      imageDescription: 'Doo features icon lock screen',
      title: 'Home Screen & Lock Screen widgets',
      description: 'Keep tabs on upcoming or due reminders with small, medium, and large widgets.'
    },
    {
      source: 'doo_feature_icon_3.svg',
      imageDescription: 'Doo features icon icloud and backup',
      title: 'iCloud Backup & Sync',
      description: 'Using your Apple ID to sync tasks between your iOS and Mac devices.'
    },
    {
      source: 'doo_feature_icon_4.svg',
      imageDescription: 'Doo features icon ipad support',
      title: 'iPad Support',
      description: 'Full iPad support including multitasking with Split View and Slide Over.'
    },
    {
      source: 'doo_feature_icon_5.svg',
      imageDescription: 'Doo features icon accessibility',
      title: 'Accesibility',
      description: 'Dynamic Type and VoiceOver support create a more universal experience for all.'
    },
  ]

  link: Link = {
    url:'http://getdooapp.com/features',
    title:'View all features',
  }
}

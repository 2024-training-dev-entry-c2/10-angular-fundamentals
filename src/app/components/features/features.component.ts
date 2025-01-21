import { Component } from '@angular/core';
import { DividerComponent } from '@components/divider/divider.component';
import { FooterComponent } from "@components/footer/footer.component";
import { FeaturesSummaryComponent } from '@components/features-summary/features-summary.component';
import { DownloadsComponent } from '@components/downloads/downloads.component';
import { FeaturesHeaderComponent } from '@components/features-header/features-header.component';
import { FeatureHeader } from '@interfaces/features.header.interface';
import { FeatureImages } from '@interfaces/features.images.interface';
import { FeaturesImagesComponent } from '@components/features-images/features-images.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [DividerComponent, FeaturesSummaryComponent, FeaturesHeaderComponent, FeaturesImagesComponent, DownloadsComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  cardsHeader: FeatureHeader = {
    keyword: 'The Doo Workflow',
    subtitle: 'A simple way to build better habits and get things done'
  }

  gesturesHeader: FeatureHeader = {
    keyword: 'Gestures',
    subtitle: 'Swipe your way to success',
    description: 'Gestures transform your entire screen into a button. Select your tasks for the day and enjoy flicking them off your todo list. Without even having to look.'
  }

  gesturesImages: FeatureImages[] = [
    {
      source: 'doo_gestures_01@2x.jpg',
      alt:'Doo gestures feature'
    },
    {
      source: 'doo_gestures_02@2x.png',
      alt:'Doo gestures feature'
    }
  ]

  taskCreationHeader: FeatureHeader = {
    keyword: 'Task Creation',
    subtitle: 'Made for speed',
    description: 'Doo uses a set of custom keyboards to keep controls within reach. Create one-off tasks or future appointments with ease. No interruption. No fuss.'
  }

  imagesTaskCreation: FeatureImages[] = [
    {
      source:'iphone_frame@2x.png',
      alt:'Doo app example task creation',
    },
    {
      source:'iphone_frame@2x.png',
      alt:'Doo app example task creation',
    },
    {
      source:'iphone_frame@2x.png',
      alt:'Doo app example task creation',
    },
  ]

  sharingHeader : FeatureHeader = {
    keyword: 'Sharing',
    subtitle: 'Collaborate in style',
    description: 'Send grocery lists, chores, and other tasks to others with iMessage. Edits made by one person get sent to everyone so you can keep track of progress. Don’t forget the milk!.'
  }

  sharingImages: FeatureImages[] = [
    {
      source: 'doo_collaboration_sharing@2x.jpg',
      alt:'Doo app collaboration example'
    }
  ]

  customizationHeader : FeatureHeader = {
    keyword: 'Customization',
    subtitle: 'Adapts to how you work',
    description: 'Manage reminder notifications at the task level. Turn off notifications for date-based tasks, enable time zones, and repeat tasks from their completion date.'
  }

  customizationImages: FeatureImages[] = [{
    source: 'doo_reminder_options_customization@2x.jpg',
    alt: 'Doo app customization example'
  }]

  appleWatchHeader : FeatureHeader ={
    keyword: 'Apple Watch',
    subtitle: 'See what’s next',
    description: 'Manage tasks from the Apple Watch app or review from your watch face. Two complication options highlight what’s upcoming or your last due item.'
  }

  carrouselImages : FeatureImages[] = [{
    source: 'doo_apple_watch_complications@2x.jpg',
    alt: 'Doo app running on apple watch'
  }]

  privacyHeader : FeatureHeader = {
    keyword: 'Private by design',
    subtitle: 'Keeps your data private',
    description: 'No accounts. No trackers, no ads, and no personal data collection. Ever. Your data stays on your device and within your private iCloud account. Simple — the way it should be.'
  }

  privacyImages: FeatureImages[] = [
    {
      source:'lock_icon@2x.jpg',
      alt: 'lock icon'
    },
    {
      source:'doo_app_lock@2x.jpg',
      alt: 'Lock by face id'
    }
  ]

}

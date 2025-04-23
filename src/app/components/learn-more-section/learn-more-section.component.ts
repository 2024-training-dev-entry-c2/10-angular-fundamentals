import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewEncapsulation, input } from '@angular/core';
import { VideoWrapperComponent } from "../video-wrapper/video-wrapper.component";
import { IVideoItem } from '../../interfaces/IVideoItem';

@Component({
  selector: 'app-learn-more-section',
  templateUrl: './learn-more-section.component.html',
  styleUrls: ['./learn-more-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [VideoWrapperComponent],
})
export class LearnMoreSectionComponent {
  public items: IVideoItem[] = [ 
    { url: './images/rec-studio.mp4', title: 'Learn more about the music industry', alt: 'Rec Studio Video' },
    { url: './images/hi-five-video.mp4', title: "Have any questions for the llamas or some ass whippin' feedback", alt: 'Hi five video'}
  ];
}

import { AfterViewInit, Component, ElementRef, input, QueryList, ViewChildren } from '@angular/core';
import { IVideoItem } from '../../interfaces/IVideoItem';

@Component({
  selector: 'app-video-wrapper',
  imports: [],
  templateUrl: './video-wrapper.component.html',
  styleUrl: './video-wrapper.component.scss'
})
export class VideoWrapperComponent implements AfterViewInit {
  public items = input<IVideoItem[]>();

  @ViewChildren('videoWrapper') wrappers!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.wrappers.forEach((wrapper) => {
      const video = wrapper.nativeElement.querySelector('video') as HTMLVideoElement;

      if (video) {
        wrapper.nativeElement.addEventListener('mouseenter', () => {
          video.play();
        });

        wrapper.nativeElement.addEventListener('mouseleave', () => {
          video.pause();
        });
      }
    });
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gamma-angular';

  ngAfterViewInit(): void {
    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target as HTMLVideoElement;
  
          if (entry.isIntersecting) {
            videoElement.muted = true;
  
            videoElement.play().catch((error) => {
              console.error('Error playing the video:', error);
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((video) => {
      observer.observe(video);
    });
  }
}

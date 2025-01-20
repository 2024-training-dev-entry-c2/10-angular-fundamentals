import { Component, AfterViewInit } from '@angular/core';
import { FooterContactComponent } from '../footer-contact/footer-contact.component';
import { FooterLocationComponent } from '../footer-location/footer-location.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FooterStatusComponent } from '../footer-status/footer-status.component';

@Component({
  selector: 'app-footer',
  imports: [
    FooterContactComponent,
    FooterLocationComponent,
    FooterNavComponent,
    FooterStatusComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const scrambleTextElements = document.querySelectorAll('.scramble-text');

    scrambleTextElements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        const originalText = element.getAttribute('data-text');
        const scrambleDuration = 250;
        const iterations = 10;
        const scrambleInterval = scrambleDuration / iterations;

        let iteration = 0;
        const scrambleIntervalId = setInterval(() => {
          if (iteration >= iterations) {
            clearInterval(scrambleIntervalId);
            element.textContent = originalText;
          } else {
            element.textContent = this.partialScrambleText(originalText);
            iteration++;
          }
        }, scrambleInterval);
      });

      element.addEventListener('mouseout', () => {
        const originalText = element.getAttribute('data-text');
        element.textContent = originalText;
      });
    });
  }

  partialScrambleText(text: string | null): string {
    if (!text) return '';
    const scrambleStartIndex = Math.floor(text.length * 0.3);
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let scrambled = text.substring(0, scrambleStartIndex);
    for (let i = scrambleStartIndex; i < text.length; i++) {
      scrambled += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return scrambled;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-intro',
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.scss'],
})
export class MainIntroComponent implements OnInit {
  introItems: string[] = [
    'DEFINE YOUR STRATEGY',
    'DESIGN YOUR IDENTITY',
    'DEPLOY YOUR BRAND',
  ];
  private currentHour: number = 0;

  ngOnInit(): void {
    this.currentHour = new Date().getHours();
  }

  get isWorkingHours(): boolean {
    return this.currentHour >= 8 && this.currentHour < 18;
  }
}

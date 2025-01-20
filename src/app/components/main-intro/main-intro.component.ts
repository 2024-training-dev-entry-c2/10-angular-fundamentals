import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-intro',
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.scss'],
})
export class MainIntroComponent implements OnInit {
  isWorkingHours: boolean = false;

  ngOnInit(): void {
    this.checkWorkingHours();
  }

  checkWorkingHours(): void {
    const currentHour = new Date().getHours();
    this.isWorkingHours = currentHour >= 8 && currentHour < 18;
  }
}

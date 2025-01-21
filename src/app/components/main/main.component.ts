import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { HomeComponent } from "../home/home.component";
import { DescriptionComponent } from '../description/description.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AbousPart2Component } from '../abous-part2/abous-part2.component';
import { MeetComponent } from '../meet/meet.component';
import { ProgressComponent } from '../progress/progress.component';
import { MasterPlanComponent } from '../master-plan/master-plan.component';
import { InfoComponent } from '../info/info.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [BackgroundComponent, HomeComponent, DescriptionComponent, AboutUsComponent, AbousPart2Component, MeetComponent,  ProgressComponent, MasterPlanComponent, InfoComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

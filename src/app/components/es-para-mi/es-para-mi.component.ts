import { Component } from '@angular/core';
import { JoinComponent } from "../join/join.component";

@Component({
  selector: 'app-es-para-mi',
  imports: [JoinComponent],
  templateUrl: './es-para-mi.component.html',
  styleUrl: './es-para-mi.component.scss'
})
export class EsParaMiComponent {
 public items= ["You are not getting enough feedback or guidance","You want to improve your 'designer eye'","You struggle to make your UI look unique & polished","You constantly get asked to make your design 'pop' more."];
 public items2=["You want another pair of eyes on your work","You're looking for direct mentoring from Fons","You feel alone in your career and are looking for a community","You're the only designer in your team or company"];
}

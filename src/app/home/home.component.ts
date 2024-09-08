import { Component } from '@angular/core';
import { CarousalComponent } from './components/carousal/carousal.component';
import { CurrentActivitiesCarousalComponent } from './components/current-activities-carousal/current-activities-carousal.component';
import { UpcomingActivitiesCarousalComponent } from './components/upcoming-activities-carousal/upcoming-activities-carousal.component';
import { PastActivitiesCarousalComponent } from './components/past-activities-carousal/past-activities-carousal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalComponent,CurrentActivitiesCarousalComponent,UpcomingActivitiesCarousalComponent,PastActivitiesCarousalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

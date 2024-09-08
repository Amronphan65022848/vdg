import { Component } from '@angular/core';
import { SignFormComponent } from './form/sign-form/sign-form.component';

@Component({
  selector: 'app-activity-signup',
  standalone: true,
  imports: [SignFormComponent],
  templateUrl: './activity-signup.component.html',
  styleUrl: './activity-signup.component.css'
})
export class ActivitySignupComponent {

}

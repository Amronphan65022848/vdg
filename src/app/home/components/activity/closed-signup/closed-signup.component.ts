import { Component } from '@angular/core';
import { ClosedFormComponent } from './closed-form/closed-form.component';

@Component({
  selector: 'app-closed-signup',
  standalone: true,
  imports: [ClosedFormComponent],
  templateUrl: './closed-signup.component.html',
  styleUrl: './closed-signup.component.css'
})
export class ClosedSignupComponent {

}

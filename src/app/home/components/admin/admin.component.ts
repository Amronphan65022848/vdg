import { Component } from '@angular/core';
import { Admin1Component } from './components/admin-1/admin-1.component';
import { Admin2Component } from './components/admin-2/admin-2.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Admin1Component,Admin2Component],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

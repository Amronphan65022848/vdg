import { Component } from '@angular/core';
import { List1Component } from './components/list-1/list-1.component';
import { List2Component } from './components/list-2/list-2.component';

@Component({
  selector: 'app-activity-list-admin',
  standalone: true,
  imports: [List1Component,List2Component],
  templateUrl: './activity-list-admin.component.html',
  styleUrl: './activity-list-admin.component.css'
})
export class ActivityListAdminComponent {

}

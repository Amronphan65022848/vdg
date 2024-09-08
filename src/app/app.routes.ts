import { Routes } from '@angular/router';
import { CurrentActivityComponent } from './home/components/activity/current-activity/current-activity.component';
import { ClosedSignupComponent } from './home/components/activity/closed-signup/closed-signup.component';
import { ActivitySignupComponent } from './home/components/activity/activity-sign/activity-signup.component';
import { AdminComponent } from './home/components/admin/admin.component';
import { ActivityListAdminComponent } from './home/components/admin/activity-list-admin/activity-list-admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetyourpasswordComponent } from './resetyourpassword/resetyourpassword.component';
import { StyleComponent } from './style/style.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


export const routes: Routes = [
   {path : "login",component :LoginComponent},
   {path:"register",component: RegisterComponent},
    {path:"home",component: HomeComponent},
    {path:"admin",component: AdminComponent},
    {path:"activity-list",component: ActivityListAdminComponent},
    {path:"activity-signup",component: ActivitySignupComponent},
    {path:"closed-signup",component: ClosedSignupComponent},
    {path:"current-activities",component: CurrentActivityComponent},
    {path:"Resetyourpassword",component: ResetyourpasswordComponent},
    {path:"style",component: StyleComponent},
    {path:"volunteer",component: VolunteerComponent},
    
    

];

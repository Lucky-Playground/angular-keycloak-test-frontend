import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {ManageCustomerComponent} from './view/manage-customer/manage-customer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  {path: 'sign-in', component: SignInComponent },
  {path: 'sign-up', component: SignUpComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'manage-customers', component: ManageCustomerComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

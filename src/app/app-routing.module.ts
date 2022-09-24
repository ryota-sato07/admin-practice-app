import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MembersComponent }      from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DashboardComponent }    from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',           redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'members',    component: MembersComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: 'dashboard',  component: DashboardComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

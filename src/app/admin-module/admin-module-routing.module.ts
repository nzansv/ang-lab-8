import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [{ path: 'user', component: UserComponent},
  { path: 'group', component: GroupComponent},
  { path: '', component: DashboardComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }

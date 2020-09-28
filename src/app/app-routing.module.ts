import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {UserResolveService} from './services/user-resolve.service';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {users: UserResolveService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

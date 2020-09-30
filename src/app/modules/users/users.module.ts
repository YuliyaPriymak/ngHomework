import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {UserResolveService} from './services/user-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';



@NgModule({
  declarations: [AllUsersComponent, UserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllUsersComponent, resolve: {users: UserResolveService},
      children: [
        {path: 'details/:id', component: UserDetailsComponent}
      ]}
    ])
  ],
  providers: [UserService, UserResolveService]
})
export class UsersModule { }

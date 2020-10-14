import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';

const routes: Routes = [
  {path: 'user', component: UserComponent,
  children: [
    {path: 'posts', component: AllPostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

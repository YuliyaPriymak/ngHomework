import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {UserResolveService} from './services/user-resolve.service';
import {AllPostsComponent} from './components/posts/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';
import {AllCommentsComponent} from './components/comments/all-comments/all-comments.component';
import {CommentResolveService} from './services/comment-resolve.service';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {users: UserResolveService}},
  {path: 'posts', component: AllPostsComponent, resolve: {posts: PostResolveService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {comments: CommentResolveService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {UserResolveService} from './services/user-resolve.service';
import {AllPostsComponent} from './components/posts/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';
import {AllCommentsComponent} from './components/comments/all-comments/all-comments.component';
import {CommentResolveService} from './services/comment-resolve.service';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {AllUserPostsComponent} from './components/posts/all-user-posts/all-user-posts.component';
import {AllPostsComentsComponent} from './components/comments/all-posts-coments/all-posts-coments.component';

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent, resolve: {users: UserResolveService},
    children: [
      {
        path: 'details/:id', component: UserDetailsComponent,
        children: [
          {
            path: 'post', component: AllUserPostsComponent,
            children: [
              {path: 'comment', component: AllPostsComentsComponent}
            ]
          },
        ]
      },
    ]
  },
  {path: 'posts', component: AllPostsComponent, resolve: {posts: PostResolveService},
  children: [
    {path: 'comment', component: AllPostsComentsComponent}
  ]
  },
  {path: 'comments', component: AllCommentsComponent, resolve: {comments: CommentResolveService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

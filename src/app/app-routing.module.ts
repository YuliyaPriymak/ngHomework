import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllPostsComponent} from './components/posts/all-posts/all-posts.component';
import {PostResolveService} from './modules/posts/services/post-resolve.service';
import {AllCommentsComponent} from './components/comments/all-comments/all-comments.component';
import {CommentResolveService} from './services/comment-resolve.service';
import {AllPostsComentsComponent} from './components/comments/all-posts-coments/all-posts-coments.component';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
  /* {
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
   },*/
  {
    path: 'posts', component: AllPostsComponent, resolve: {posts: PostResolveService},
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

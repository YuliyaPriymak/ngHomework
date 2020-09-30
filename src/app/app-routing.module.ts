import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  /*{
    path: 'posts', component: AllPostsComponent, resolve: {posts: PostResolveService},
    children: [
      {path: 'comment', component: AllPostsComentsComponent}
    ]
  },*/
  {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule)}
  /*{path: 'comments', component: AllCommentsComponent, resolve: {comments: CommentResolveService}}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

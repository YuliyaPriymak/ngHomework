import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostService} from './services/post.service';
import {PostResolveService} from './services/post-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostComponent} from './components/post/post.component';



@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllPostsComponent, resolve: {posts: PostResolveService}}
    ])
  ],
  exports: [
    PostComponent
  ],
  providers: [PostService, PostResolveService]
})
export class PostsModule { }

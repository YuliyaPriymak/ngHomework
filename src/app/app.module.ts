import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { AllCommentsComponent } from './components/comments/all-comments/all-comments.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { AllUserPostsComponent } from './components/posts/all-user-posts/all-user-posts.component';
import { AllPostsComentsComponent } from './components/comments/all-posts-coments/all-posts-coments.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
    AllUserPostsComponent,
    AllPostsComentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

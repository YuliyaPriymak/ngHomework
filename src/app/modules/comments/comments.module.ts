import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentService} from './services/comment.service';
import {CommentResolveService} from './services/comment-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentComponent} from './components/comment/comment.component';



@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent, resolve: {comments: CommentResolveService}}
    ])
  ],
  providers: [CommentService, CommentResolveService]
})
export class CommentsModule { }

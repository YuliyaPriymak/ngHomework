import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../services/comment.service';
import {Comments} from '../../../models/Comment';

@Component({
  selector: 'app-all-posts-coments',
  templateUrl: './all-posts-coments.component.html',
  styleUrls: ['./all-posts-coments.component.scss']
})
export class AllPostsComentsComponent implements OnInit {
  postComments: Comments[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private commentsServise: CommentService) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.commentsServise.getCommentsByPostId(params.id).subscribe(value => {
        console.log(value);
        this.postComments = value;
      });
    });
  }

  ngOnInit(): void {
  }

}

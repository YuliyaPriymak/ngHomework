import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../modules/posts/services/post.service';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-all-user-posts',
  templateUrl: './all-user-posts.component.html',
  styleUrls: ['./all-user-posts.component.scss']
})
export class AllUserPostsComponent implements OnInit {
  usersPosts: Post[];

  constructor(private activatedRouter: ActivatedRoute,
              private postService: PostService) {
    this.activatedRouter.queryParams.subscribe(params => {
      console.log(params, 'qw params');
      this.postService.getPostByUserId(params.id).subscribe(value => {
        console.log(value, 'users posts');
        this.usersPosts = value;
      });
    });
  }

  ngOnInit(): void {
  }

}

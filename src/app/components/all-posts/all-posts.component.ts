import {Component, OnInit} from '@angular/core';
import {IPost} from '../../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.postsService.getPotsByUserId(params.id).subscribe(value => {
        this.posts = value;
      });
    });
  }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
@Input() post: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}

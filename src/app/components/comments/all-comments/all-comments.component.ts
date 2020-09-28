import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comments} from '../../../models/Comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {
  commentsList: Comments[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      this.commentsList = value.comments;
    });
  }

  ngOnInit(): void {
  }

}

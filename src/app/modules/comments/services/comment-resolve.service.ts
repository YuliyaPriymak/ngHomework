import {Injectable} from '@angular/core';
import {CommentService} from './comment.service';
import {Resolve} from '@angular/router';
import {Comments} from '../../../models/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<Comments[]> {

  constructor(private commentsService: CommentService) {
  }

  resolve(): Observable<Comments[]> | Promise<Comments[]> | Comments[] {
    return this.commentsService.getComments();
  }
}
